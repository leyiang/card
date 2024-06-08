import { Card } from "./Card.tsx";
import { ControlHeader } from "./ControlHeader.tsx";
import { useCardStore } from "../stores/CardStore.ts";
import { FooterControl } from "./FooterControl.tsx";
import { useSettingStore } from "../stores/SettingStore.ts";
import { shuffle } from "../utils/array.ts";
import { GetInfoFromSearchParams } from "./GetInfoFromSearchParams.tsx";
import { useEffect, useState } from "react";

interface ICardGroupProps {
    onGroupDone: () => void;
}

export function CardGroup({ onGroupDone }: ICardGroupProps) {
    const [index, setIndex] = useState(0);
    const cardStore = useCardStore();
    const settingStore = useSettingStore();
    const stack = cardStore.stack();

    const nextCard = () => {
        const newIndex = index + 1;

        if (newIndex >= cards.length) {
            onGroupDone?.();
            setIndex(0);
            return;
        }

        setIndex( newIndex );
    }

    useEffect(() => {
        cardStore.setCardPtr( index );
    }, [index]);

    let cards = (stack?.cards ?? []).slice(0);

    if( settingStore.order === "backward" ) {
        cards = cards.reverse();
    } else if ( settingStore.order === "random" ) {
        shuffle( cards );
    }

    // nextCard() {
    //     const stack = get().stack();
    //     if( ! stack ) return;
    //     const newCardPtr = get().cardPtr + 1
    //     if( newCardPtr > stack.cards.length - 1 ) return;
    //     set({ cardPtr: newCardPtr })
    // }

    const card = cards[ index ];

    return (
        <div className="card-group">
            <ControlHeader />
            <GetInfoFromSearchParams />

            {
                card &&
                <Card
                    card={card}
                    onCardDone={nextCard}
                />
            }


            <FooterControl />
        </div>
    )
}