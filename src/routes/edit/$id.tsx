import { createFileRoute, useNavigate, useSearch } from '@tanstack/react-router'
import { LiveEditCard } from '../../components/LiveEditCard';
import { useEffect, useState, useRef } from 'react';
import { api } from '../../axios-instrance';
import { Card, iCard} from '../../models/Card';
import { Group } from '../../models/Group';
import { Stack } from '../../models/Stack';
import { Spinner } from '../../components/Spinner';

export const Route = createFileRoute('/edit/$id')({
	component: EditRoute,
	validateSearch: (search: Record<string, unknown>) => {
		return {
			index: search.index ? parseInt(search.index as string) : 0
		};
	}
});

function StatusIndicator({ status }: { status: 'idle' | 'saving' | 'saved' | 'error' }) {
	if (status === 'idle') return null;

	const statusConfig = {
		saving: {
			icon: <Spinner className="w-4 h-4" />,
			text: 'Saving',
			color: 'text-blue-600'
		},
		saved: {
			icon: (
				<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
				</svg>
			),
			text: 'Saved!',
			color: 'text-green-600'
		},
		error: {
			icon: (
				<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
				</svg>
			),
			text: 'Failed to save',
			color: 'text-red-600'
		}
	};

	const config = statusConfig[status];
	if (!config) return null;

	return (
		<div className={`flex items-center bg-white p-2 rounded-md gap-2 ${config.color}`}>
			{config.icon}
			<span>{config.text}</span>
		</div>
	);
}

function EditRoute() {
	const { id } = Route.useParams();
	const search = new URLSearchParams( window.location.search );
	const [card, setCard] = useState<Card | null>(null);
	const [groups, setGroups] = useState<Group[]>([]);
	const [stacks, setStacks] = useState<Stack[]>([]);
	const [groupPointer, setGroupPointer] = useState<number>(0);
	const [stackPointer, setStackPointer] = useState<number>(0);
	const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
	const statusTimeoutRef = useRef<number>();

	useEffect(() => {
		api.get(`/card/${id}`).then(res => {
			const loadedCard = Card.Load(res.data.data);

			console.log( "load", loadedCard );
			
			setCard(loadedCard);
		});
	}, [id]);

	useEffect(() => {
		api.get('/group').then(res => {
			const groupList = res.data.data.map((raw: any) => Group.Load(raw));
			setGroups(groupList);
		});
	}, []);

	useEffect(() => {
		if( ! card ) return;

		const stackIndex = stacks.findIndex(stack => stack.slug === card.stack);

		if( stackIndex !== -1 ) {
			console.log("set stack pointer", stackIndex);
			
			setStackPointer(stackIndex);
		}
	}, [card, stacks]);

	useEffect(() => {
		const group = groups[groupPointer];
		console.log( group );
		
		if (!group) return;

		api.get(`/group/${group.slug}/stack`).then(res => {
			const stackList = res.data.data.map((raw: any) => Stack.Load(raw));
		
			setStacks(stackList);
		});
	}, [groupPointer, groups, card]);

	async function handleStackChange(e: React.ChangeEvent<HTMLSelectElement>) {
		const newStackPointer = Number(e.target.value);
		setStackPointer(newStackPointer);
		
		const newStack = stacks[newStackPointer];
		if (id && newStack) {
			setSaveStatus('saving');
			
			try {
				await api.patch(`/card/${id}/stack`, {
					stack: newStack.slug
				});
				setSaveStatus('saved');
				
				// Clear previous timeout
				if (statusTimeoutRef.current) {
					clearTimeout(statusTimeoutRef.current);
				}
				
				statusTimeoutRef.current = window.setTimeout(() => {
					setSaveStatus('idle');
				}, 2000);
			} catch (error) {
				console.error('Failed to update stack:', error);
				setSaveStatus('error');
				
				statusTimeoutRef.current = window.setTimeout(() => {
					setSaveStatus('idle');
				}, 3000);
			}
		}
	}

	async function handleSave(updatedCard: Card) {
		// Clear any existing timeout
		if (statusTimeoutRef.current) {
			clearTimeout(statusTimeoutRef.current);
		}

		debugger
		setSaveStatus('saving');
		try {
			await api.patch(`/card/${id}`, {
				content: updatedCard.rawContent
			});
			setSaveStatus('saved');
			
			statusTimeoutRef.current = window.setTimeout(() => {
				setSaveStatus('idle');
			}, 2000);
		} catch (error) {
			console.error('Failed to save card:', error);
			setSaveStatus('error');
			
			statusTimeoutRef.current = window.setTimeout(() => {
				setSaveStatus('idle');
			}, 3000);
			throw error;
		}
	}

	// Cleanup timeout on unmount
	useEffect(() => {
		return () => {
			if (statusTimeoutRef.current) {
				clearTimeout(statusTimeoutRef.current);
			}
		};
	}, []);

	if (!card) return null;

	return (
		<div className="container mx-auto px-4">
			<div className="fixed top-4 right-4 flex items-center gap-2 z-50 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
			</div>

			<div className="flex items-center mb-4">
				<div className="flex items-center gap-4 mr-2">
					<select
						value={groupPointer}
						onChange={e => setGroupPointer(Number(e.target.value))}
						className="border rounded px-2 py-1"
					>
						{groups.map((group, index) => (
							<option key={group.id} value={index}>
								{group.name}
							</option>
						))}
					</select>

					<select
						value={stackPointer}
						onChange={handleStackChange}
						className="border rounded px-2 py-1"
					>
						{stacks.map((stack, index) => (
							<option key={stack.id} value={index}>
								{stack.name}
							</option>
						))}
					</select>
				</div>
				<StatusIndicator status={saveStatus} />
			</div>


			<LiveEditCard 
				defaultCard={card}
				defaultContentIndex={ Number(search.get("index") ?? 0) }
				onSave={handleSave}
				editMode="edit"
			/>
		</div>
	);
}