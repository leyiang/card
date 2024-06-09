import React, { useRef } from "react";
import { RenderCard } from "./RenderCard";
import { CardControl } from "./CardControl";
import { joinClass } from "../utils/component";
import { useCardStore } from "../stores/CardStore";

export interface ICardProps {
    card: string[];
    noInteraction?: boolean;
    startIndex?: number;

    compact?: boolean;
}

export function Card({ card, noInteraction=false, startIndex = -1, compact = false}: ICardProps) {
    const cardEl = useRef(null);
    const cardStore = useCardStore();

    const style = {
        "--total": card.length,
        "--current": cardStore.contentPtr + 1,
    } as React.CSSProperties;

    let index = cardStore.contentPtr;

    if( startIndex > -1 && startIndex < card.length && noInteraction ) {
        index = startIndex;
    }

    return (
        <>
            {
                (! noInteraction) &&
                <CardControl />
            }

            <div
                id="card"
                className={joinClass([
                    cardStore.contentPtr === 0 ? "" : "answer",
                    compact ? "card-compact" : ""
                ])}
                style={style}
                ref={ cardEl }
            >
                <RenderCard data={card[ index ]} />
            </div>
        </>
    );
}