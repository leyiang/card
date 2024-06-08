import { Card } from "./Card.tsx";
import { ControlHeader } from "./ControlHeader.tsx";
import { useGroupStore } from "../stores/GroupStore.ts";
import { FooterControl } from "./FooterControl.tsx";
import { useSettingStore } from "../stores/SettingStore.ts";
import { shuffle } from "../utils/array.ts";
import { GetInfoFromSearchParams } from "./GetInfoFromSearchParams.tsx";
import { useCardStore } from "../stores/CardStore.ts";

interface ICardGroupProps {
    onGroupDone: () => void;
}

export function CardGroup({ onGroupDone }: ICardGroupProps) {
    const cardStore = useCardStore();
    const groupStore = useGroupStore();
    const settingStore = useSettingStore();
    const stack = groupStore.stack();

    const nextCard = () => {
        cardStore.nextCard();

        if( cardStore.cardPtr === cardStore.cards.length - 1 ) {
            onGroupDone?.();
        }
    }

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
    //  IGroupStore   set({ cardPtr: newCardPtr })
    // }

    const card = cardStore.card();
    return (
        <div className="card-group">
            <ControlHeader />
            <GetInfoFromSearchParams />

            {
                card &&
                <Card
                    card={ card }
                    onCardDone={nextCard}
                />
            }


            <FooterControl />
        </div>
    )
}