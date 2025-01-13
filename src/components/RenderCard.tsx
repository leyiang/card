import React, { useEffect, useRef, useState } from "react";
import { RenderContent } from "./RenderContent";
import { CardControl } from "./CardControl";
import { joinClass } from "../utils/component";
import { useCardStore } from "../stores/CardStore";
import { Content } from "../models/Content";
import { Card } from "../models/Card";
import { Link } from "@tanstack/react-router";
import { api } from "../axios-instrance";

export interface ICardProps {
    startIndex?: number;
    noInteraction?: boolean;
    card: Card;
    compact?: boolean;
    next?: () => void;
    prev?: () => void;
}

export function RenderCard({
    card: initialCard, 
    noInteraction=false, 
    compact = false, 
    next, 
    prev,
}: ICardProps) {
    const cardEl = useRef(null);
    const [pointer, setPointer] = useState(0);
    const [card, setCard] = useState<Card>(initialCard);

    // Update internal card state when prop changes
    useEffect(() => {
        setCard(initialCard);
    }, [initialCard]);

    async function refreshCard() {
        if (!card.contents[pointer]) return;
        
        try {
            const response = await api.get(`/card/${card.id}`);
            const updatedCard = Card.Load(response.data.data);
            setCard(updatedCard);
        } catch (error) {
            console.error('Failed to refresh card:', error);
        }
    }

    // Add focus event listener
    // useEffect(() => {
    //     function handleFocus() {
    //         refreshCard();
    //     }

    //     window.addEventListener('focus', handleFocus);
    //     return () => window.removeEventListener('focus', handleFocus);
    // }, [card.id]); // Only recreate listener when card ID changes

    function nextContent() {
        if (pointer < card.contents.length - 1) {
            setPointer(pointer + 1);
        } else {
            setPointer(0);
            next?.();
        }
    }

    function prevContent() {
        if (pointer > 1) {
            setPointer(pointer - 1);
        }
    }

    return (
        <div className="flex">
            <div
                id="card"
                className={joinClass([
                    pointer === 0 ? "" : "answer",
                    compact ? "card-compact" : ""
                ])}
                ref={cardEl}
            >
                <RenderContent content={card.contents[pointer]} />
            </div>

            <div className="flex items-start justify-between mb-4">
                {!noInteraction && (
                    <CardControl
                        next={nextContent}
                        prev={prevContent}
                    />
                )}

                {!compact && (
                    <div className="flex flex-col gap-2">
                        <button
                            onClick={refreshCard}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200"
                        >
                            Refresh
                        </button>

                        <Link
                            to="/edit/$id"
                            params={{
                                id: card.id.toString()
                            }}
                            search={{
                                index: pointer.toString()
                            }}
                            target='_blank'
                            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Edit
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}