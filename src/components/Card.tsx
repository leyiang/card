import React, { useEffect, useRef, useState } from "react";
import { RenderCard } from "./RenderCard";
import { CardControl } from "./CardControl";
import { joinClass } from "../utils/component";
import { useCardStore } from "../stores/CardStore";
import { Content } from "../models/Content";

export interface ICardProps {
	content: Content
    noInteraction?: boolean;
    startIndex?: number;

    compact?: boolean;
}

export function Card({ content, noInteraction=false, compact = false}: ICardProps) {
    const [index, setIndex] = useState(0);
    const cardEl = useRef(null);
    const cardStore = useCardStore();

    // const style = {
    //     "--total": card.length,
    //     "--current": cardStore.contentPtr + 1,
    // } as React.CSSProperties;

    // useEffect(() => {
    //     if( startIndex > -1 && startIndex < card.length && noInteraction ) {
    //         setIndex( startIndex );
    //     } else {
    //         setIndex( cardStore.contentPtr );
    //     }
    // }, [ cardStore.contentPtr ]);

    return (
        <>
            {/* {
                (! noInteraction) &&
                <CardControl />
            } */}

            <div
                id="card"
                className={joinClass([
                    cardStore.contentPtr === 0 ? "" : "answer",
                    compact ? "card-compact" : ""
                ])}
                ref={ cardEl }
            >
                {/* { index } */}
                <RenderCard content={ content } />
            </div>
        </>
    );
}