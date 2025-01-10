import { useGroupStore } from "../stores/GroupStore.ts";
import { FooterControl } from "./FooterControl.tsx";
import { useSettingStore } from "../stores/SettingStore.ts";
import { shuffle } from "../utils/array.ts";
import { GetInfoFromSearchParams } from "./GetInfoFromSearchParams.tsx";
import { useCardStore } from "../stores/CardStore.ts";
import { RenderCard } from "./RenderCard.tsx";
import { useEffect, useState } from "react";
import { Card } from "../models/Card.ts";
import { api } from "../axios-instrance.ts";

interface ICardGroupProps {
}

export function CardGroup({}: ICardGroupProps) {
    // const cardStore = useCardStore();
    // const groupStore = useGroupStore();
    // const settingStore = useSettingStore();
    // const stack = groupStore.stack();
    // const [card, setCard ] = useState( cardStore.card() );

    // let cards = (stack?.cards ?? []).slice(0);

    // if( settingStore.order === "backward" ) {
    //     cards = cards.reverse();
    // } else if ( settingStore.order === "random" ) {
    //     shuffle( cards );
    // }

    // nextCard() {
    //     const stack = get().stack();
    //     if( ! stack ) return;
    //     const newCardPtr = get().cardPtr + 1
    //     if( newCardPtr > stack.cards.length - 1 ) return;
    //  IGroupStore   set({ cardPtr: newCardPtr })
    // }

    // useEffect(() => {
    //     console.log( cardStore.cardPtr, "999" );
    //     console.log( cardStore.card() );
        
    //     setCard( cardStore.card() );
    // }, [ cardStore.cardPtr ] );

	const [ cards, setCards ] = useState<Card[]>([]);
	const [ pointer, setPointer ] = useState(0);

	useEffect(() => {
		api.get("/card").then((res) => {
			const rawList = res.data.data;
			console.log( rawList );
			

			if( Array.isArray(rawList) ) {
				const card_list = rawList.map((raw) => {
					return Card.Load(raw);
				});

				setCards(card_list);
				console.log( card_list);
			}
		});
	}, []);
    
    return (
        <div className="card-group">
            {/* <ControlHeader /> */}
            {/* <GetInfoFromSearchParams /> */}

            {/* { card && <Card card={ card } /> } */}

			{
				cards[0] &&
				<RenderCard
					card={cards[ pointer ]}
					next={ () => setPointer(pointer + 1 )}
					prev={ () => setPointer(pointer - 1 )}
				/>
			}
            {/* <FooterControl /> */}
        </div>
    )
}