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

function EditRoute() {
	const { id } = Route.useParams();
	const search = new URLSearchParams( window.location.search );
	const [card, setCard] = useState<Card | null>(null);
	const [groups, setGroups] = useState<Group[]>([]);
	const [stacks, setStacks] = useState<Stack[]>([]);
	const [groupPointer, setGroupPointer] = useState<number>(0);
	const [stackPointer, setStackPointer] = useState<number>(0);
	const [stackChangeStatus, setStackChangeStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
	const stackStatusTimeoutRef = useRef<number>();

	useEffect(() => {
		api.get(`/card/${id}`).then(res => {
			const loadedCard = Card.Load(res.data.data);
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
			setStackChangeStatus('saving');
			
			try {
				await api.patch(`/card/${id}/stack`, {
					stack: newStack.slug
				});
				
				setStackChangeStatus('saved');
				
				// Clear previous timeout
				if (stackStatusTimeoutRef.current) {
					clearTimeout(stackStatusTimeoutRef.current);
				}
				
				// Reset status after 2 seconds
				stackStatusTimeoutRef.current = window.setTimeout(() => {
					setStackChangeStatus('idle');
				}, 2000);
				
			} catch (error) {
				console.error('Failed to update stack:', error);
				setStackChangeStatus('error');
				
				// Reset error status after 3 seconds
				stackStatusTimeoutRef.current = window.setTimeout(() => {
					setStackChangeStatus('idle');
				}, 3000);
			}
		}
	}

	// Cleanup timeout on unmount
	useEffect(() => {
		return () => {
			if (stackStatusTimeoutRef.current) {
				clearTimeout(stackStatusTimeoutRef.current);
			}
		};
	}, []);

	if (!card) return null;

	function handleSave(card: iCard) {
		return api.patch(`/card/${id}`, {
			contents: card.contents
		});
	}

	return (
		<div>
			<div className="flex items-center gap-4 mb-4">
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

				<div className="flex items-center gap-2">
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

					{/* Stack change status indicator */}
					{stackChangeStatus === 'saving' && (
						<Spinner className="w-4 h-4 text-blue-500" />
					)}
					{stackChangeStatus === 'saved' && (
						<span className="text-green-500">✓</span>
					)}
					{stackChangeStatus === 'error' && (
						<span className="text-red-500">×</span>
					)}
				</div>
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