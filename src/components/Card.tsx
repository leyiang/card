import { useEventListener } from "ahooks";
import React, { useEffect, useRef, useState } from "react";
import { RenderCard } from "./RenderCard";
import { CardControl } from "./CardControl";

export interface ICardProps {
    card: string[];
    onCardDone: () => void;
}

export function Card({ card, onCardDone }: ICardProps) {
    const [index, setIndex] = useState(0);
    const cardEl = useRef(null);

    useEffect(() => {
        setIndex(0);
    }, [card]);

    const style = {
        "--total": card.length,
        "--current": index + 1,
    } as React.CSSProperties;

    return (
        <>
            <CardControl
                index={index}
                setIndex={setIndex}
                total={ card.length }
                onCardDone={ onCardDone }
                elRef={ cardEl }
            />

            <div
                id="card"
                className={index === 0 ? "" : "answer"}
                style={style}
                ref={ cardEl }
            >
                <RenderCard data={card[index]} />
            </div>
        </>
    );
}