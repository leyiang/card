import React, { useEffect, useRef, useState } from "react";
import { RenderCard } from "./RenderCard";
import { CardControl } from "./CardControl";
import { joinClass } from "../utils/component";
import { useCardStore } from "../stores/CardStore";

export interface ICardProps {
    card: string[];
    onCardDone?: () => void;
    noInteraction?: boolean;
    startIndex?: number;

    compact?: boolean;
}

export function Card({ card, onCardDone, noInteraction=false, startIndex = 0, compact = false}: ICardProps) {
    const [index, setIndex] = useState( startIndex );
    const cardEl = useRef(null);
    const cardStore = useCardStore();

    useEffect(() => {
        setIndex( startIndex );
    }, [card]);

    useEffect(() => {
        cardStore.setContentPtr( index );
    }, [index]);

    const style = {
        "--total": card.length,
        "--current": index + 1,
    } as React.CSSProperties;

    return (
        <>
            {
                (! noInteraction) &&

                <CardControl
                    index={index}
                    setIndex={setIndex}
                    total={ card.length }
                    onCardDone={ onCardDone }
                    elRef={ cardEl }
                />
            }

            <div
                id="card"
                className={joinClass([
                    index === 0 ? "" : "answer",
                    compact ? "card-compact" : ""
                ])}
                style={style}
                ref={ cardEl }
            >
                <RenderCard data={card[index]} />
            </div>
        </>
    );
}