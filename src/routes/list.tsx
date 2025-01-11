import { createFileRoute, Link } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { api } from '../axios-instrance';
import { Card } from '../models/Card';
import { RenderCard } from '../components/RenderCard';
import { Group } from '../models/Group';
import { Stack } from '../models/Stack';

export const Route = createFileRoute('/list')({
    component: ListRoute
});

function ListRoute() {
    const [cards, setCards] = useState<Card[]>([]);
    const [groups, setGroups] = useState<Group[]>([]);
    const [stacks, setStacks] = useState<Stack[]>([]);
    
    const [groupPointer, setGroupPointer] = useState<number>(0);
    const [stackPointer, setStackPointer] = useState<number>(0);

    // Load groups
    useEffect(() => {
        api.get("/group").then(res => {
            const groupList = res.data.data.map((raw: any) => Group.Load(raw));
            setGroups(groupList);
            setGroupPointer(0);  // Set to first group by default
        });
    }, []);

    // Load stacks when group changes
    useEffect(() => {
        if (groups[groupPointer]) {
            const group = groups[groupPointer];
            api.get(`/group/${ group.id }/stack`).then(res => {
                setStacks(res.data.data);
                setStackPointer(0);  // Reset stack pointer when group changes
            });
        }
    }, [groups, groupPointer]);

    // Load cards when group or stack changes
    useEffect(() => {
        if (groups[groupPointer] && stacks[stackPointer]) {
            const stack = stacks[stackPointer];
			if( ! stack ) return;

            api.get(`/stack/${ stack.id }/card`).then(res => {
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