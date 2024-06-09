import { useSearchParams } from "react-router-dom";
import { useGroupStore } from "../stores/GroupStore";
import { useEffect } from "react";
import { useCardStore } from "../stores/CardStore";

export function GetInfoFromSearchParams() {
    const [search] = useSearchParams();
    const groupStore = useGroupStore();
    const cardStore = useCardStore();

    function loadPersist(group: string | null, stack: string | null, card: string | null, content: string | null) {
        if( group ) {
            groupStore.changeGroup( group );
        }

        if( stack ) {
            const group = groupStore.group();
            const id_list = group.map(stack => stack.id);
            const index = id_list.indexOf( stack );

            if( index > -1 ) {
                groupStore.changeStack( index );
            }
        }

        if( card ) {
            const cardPtr = Number( card );
            cardStore.setCardPtr( cardPtr );
        }

        if( content ) {
            const contentPtr = Number( content );
            cardStore.setContentPtr( contentPtr );
        }
    }

    useEffect(() => {
        loadPersist(
            search.get("group"),
            search.get("stack"),
            search.get("card"),
            search.get("content")
        );
    }, [] );

    return null;
}