import { createFileRoute, Link } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { api } from '../axios-instrance';
import { Card } from '../models/Card';
import { RenderCard } from '../components/RenderCard';
import { Group } from '../models/Group';
import { Stack } from '../models/Stack';
import { useNavigate, useSearch } from '@tanstack/react-router';

export const Route = createFileRoute('/list')({
    component: ListRoute,
    validateSearch: (search: Record<string, unknown>) => {
        return {
            group: search.group as string,
            stack: search.stack as string,
        };
    }
});

function ListRoute() {
    const navigate = useNavigate();
    const search = useSearch({ from: '/list' });
    
    const [cards, setCards] = useState<Card[]>([]);
    const [groups, setGroups] = useState<Group[]>([]);
    const [stacks, setStacks] = useState<Stack[]>([]);
    
    const [groupPointer, setGroupPointer] = useState<number>(0);
    const [stackPointer, setStackPointer] = useState<number>(0);
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    // Initial load with combined data
    useEffect(() => {
        if (!isInitialLoad) return;

        const params = new URLSearchParams();
        if (search.group) params.append('group', search.group);
        if (search.stack) params.append('stack', search.stack);

        api.get(`/list?${params}`).then(res => {
            const { groups, stacks, cards} = res.data;
			console.log( groups, stacks, cards );
			
            const loadedGroups = groups.map((raw: any) => Group.Load(raw));
            const loadedStacks = stacks.map((raw: any) => Stack.Load(raw));
            const loadedCards = cards.map((raw: any) => Card.Load(raw)).slice(0, 10);

            setGroups(loadedGroups);
            setStacks(loadedStacks);
            setCards(loadedCards);

            // Set pointers based on URL params
            if (search.group) {
                const index = loadedGroups.findIndex(g => g.slug === search.group);
                setGroupPointer(index >= 0 ? index : 0);
            }
            if (search.stack) {
                const index = loadedStacks.findIndex(s => s.slug === search.stack);
                setStackPointer(index >= 0 ? index : 0);
            }

            setIsInitialLoad(false);
        });
    }, [search.group, search.stack]);

    // Load stacks and restore selection from URL
    useEffect(() => {
        if (groups[groupPointer]) {
            const group = groups[groupPointer];
            api.get(`/group/${group.id}/stack`).then(res => {
				const rawStackList = res.data.data;

				if( ! Array.isArray(rawStackList) ) {
					return;
				}

				const stackList = rawStackList.map((raw: any) => Stack.Load(raw));
				setStacks(stackList);
                
                if (search.stack) {
                    const index = stackList.findIndex(s => s.slug === search.stack);
                    setStackPointer(index >= 0 ? index : 0);
                } else {
                    setStackPointer(0);
                }
            });
        }
    }, [groups, groupPointer, search.stack]);

    // Update URL when selection changes
    useEffect(() => {
        const group = groups[groupPointer];
        const stack = stacks[stackPointer];
        
        if (group && stack) {
            navigate({
                search: {
                    group: group.slug,
                    stack: stack.slug
                }
            });
        }
    }, [groupPointer, stackPointer, groups, stacks]);

    // Load cards
    useEffect(() => {
        if (groups[groupPointer] && stacks[stackPointer]) {
            const stack = stacks[stackPointer];
            if (!stack) return;

            api.get(`/stack/${stack.id}/card`).then(res => {
                const cardList = res.data.data
                    .map((raw: any) => Card.Load(raw))
                    .slice(0, 10);
                setCards(cardList);
            });
        }
    }, [stacks, stackPointer]);

    return (
        <div className="h-screen overflow-hidden flex flex-col">
            <div className="p-4 flex items-center gap-4">
                <h1 className="text-3xl font-bold">Card List</h1>
                <select 
                    value={groupPointer}
                    onChange={e => setGroupPointer(Number(e.target.value))}
                    className="border rounded px-2 py-1"
                >
                    {groups.map((group, index) => (
                        <option key={group.slug} value={index}>
                            {group.name}
                        </option>
                    ))}
                </select>

                <select 
                    value={stackPointer}
                    onChange={e => setStackPointer(Number(e.target.value))}
                    className="border rounded px-2 py-1"
                >
                    {stacks.map((stack, index) => (
                        <option key={stack.slug} value={index}>
                            {stack.name}
                        </option>
                    ))}
                </select>

                {groups[groupPointer] && stacks[stackPointer] && (
                    <Link
                        to="/learn"
                        search={{
                            group: groups[groupPointer].slug,
                            stack: stacks[stackPointer].slug
                        }}
                        className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Learn
                    </Link>
                )}
            </div>
            
            <div className="flex-1 overflow-auto px-4 pb-8">
                <div className="flex gap-2 flex-wrap justify-center">
                    {cards.map((card, _index) => (
						<Link
							to="/edit/$id"
							params={{
								id: card.id.toString()
							}}
							key={card.id}
						>
							<RenderCard 
								card={card}
								noInteraction
								compact
							/>
						</Link>
                    ))}
                </div>
            </div>
        </div>
    );
} 