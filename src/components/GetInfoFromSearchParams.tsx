import { useSearchParams } from "react-router-dom";
import { useGroupStore } from "../stores/GroupStore";
import { useEffect } from "react";
import { useCardStore } from "../stores/CardStore";

export function GetInfoFromSearchParams() {
    const [search] = useSearchParams();
    const groupStore = useGroupStore();
    const cardStore = useCardStore();

    useEffect(() => {
        if( search.get("group") ) {
            groupStore.changeGroup( search.get("group")! );
        }

        const stack = search.get("stack");
        if( stack ) {
            const group = groupStore.group();
            const id_list = group.map(stack => stack.id);
            const index = id_list.indexOf( stack );

            if( index > -1 ) {
                groupStore.changeStack( index );
            }
        }

        const card = search.get("card");
        const content = search.get("content");

        if( card ) {
            const cardPtr = Number( card );
            cardStore.setCardPtr( cardPtr );
        }

        if( content ) {
            const contentPtr = Number( content );
            cardStore.setContentPtr( contentPtr );
        }
    }, [] );

    return null;
}