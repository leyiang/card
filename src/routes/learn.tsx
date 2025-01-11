import { createFileRoute, useSearch, Link } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { api } from '../axios-instrance';
import { Card } from '../models/Card';
import { RenderCard } from '../components/RenderCard';

export const Route = createFileRoute('/learn')({
    component: LearnRoute,
    validateSearch: (search: Record<string, unknown>) => {
        return {
            group: search.group as string,
            stack: search.stack as string,
        };
    }
});

function LearnRoute() {
    const search = useSearch({ from: '/learn' });
    const [cards, setCards] = useState<Card[]>([]);
    const [pointer, setPointer] = useState(0);

    // Load cards based on group and stack
    useEffect(() => {
        if (search.group && search.stack) {
            api.get(`/list`, {
                params: {
                    group: search.group,
                    stack: search.stack
                }
            }).then(res => {
                const { cards } = res.data;
                const loadedCards = cards.map((raw: any) => Card.Load(raw));
                setCards(loadedCards);
            });
        }
    }, [search.group, search.stack]);

    function nextCard() {
        if (pointer < cards.length - 1) {
            setPointer(p => p + 1);
        }
    }

    function prevCard() {
        if (pointer > 0) {
            setPointer(p => p - 1);
        }
    }

    return (
        <div className="h-screen flex flex-col">
            <div className="p-4 flex items-center justify-between">
                <span className="text-gray-600">
                    {cards.length > 0 && (
                        <span>{pointer + 1} / {cards.length}</span>
                    )}
                </span>

            </div>

            <div className="flex-1 flex items-center justify-center">
                {cards[pointer] && (
                    <RenderCard 
                        card={cards[pointer]}
                        next={nextCard}
                        prev={prevCard}
                    />
                )}
            </div>
        </div>
    );
} 