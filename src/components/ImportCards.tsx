import { useEffect } from "react";
import { useCardStore } from "../stores/CardStore";
import { useGroupStore } from "../stores/GroupStore";
import { useSettingStore } from "../stores/SettingStore";
import { shuffle } from "../utils/array";

export function ImportCards() {
    const cardStore = useCardStore();
    const settingStore = useSettingStore();
    const groupStore = useGroupStore();


    useEffect(() => {
        const stack = groupStore.stack();
        let cards = stack.cards.slice(0);

        if( settingStore.order === "backward" ) {
            cards = cards.reverse();
        } else if ( settingStore.order === "random" ) {
            shuffle( cards );
        }

        cardStore.importCards( cards );

    }, [ settingStore.order, groupStore.stackPtr, groupStore.groupPtr ]);

    // if( settingStore.order)
    // console.log( settingStore.order );
    

    return null;
}