import React, { useEffect, useRef, useState } from "react";
import { RenderContent } from "./RenderContent";
import { CardControl } from "./CardControl";
import { joinClass } from "../utils/component";
import { useCardStore } from "../stores/CardStore";
import { Content } from "../models/Content";
import { Card } from "../models/Card";

export interface ICardProps {
    startIndex?: number;
    noInteraction?: boolean;

	card: Card
    compact?: boolean;

	next?: () => void;
	prev?: () => void;
}

export function RenderCard({
	card, noInteraction=false, compact = false, next, prev
}: ICardProps) {
    const cardEl = useRef(null);
    const [pointer, setPointer] = useState(0);

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
	function nextContent() {
		if( pointer < card.contents.length - 1 ) {
			setPointer(pointer + 1);
		} else {
			setPointer(0);
			next?.();
		}
	}

	function prevContent() {
		if( pointer > 1 ) {
			setPointer(pointer - 1);
		}
	}

    return (
        <>
            {
                (! noInteraction) &&

                <CardControl
					next={nextContent}
					prev={prevContent}
				/>
            }

            <div
                id="card"
                className={joinClass([
                    pointer === 0 ? "" : "answer",
                    compact ? "card-compact" : ""
                ])}
                ref={ cardEl }
            >
                {/* { index } */}
                <RenderContent content={ card.contents[pointer] } />
            </div>
        </>
    );
}