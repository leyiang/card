import { useSearchParams } from "react-router-dom";
import { useGroupStore } from "../stores/GroupStore";
import { useEffect } from "react";
import { useCardStore } from "../stores/CardStore";
import { useSettingStore } from "../stores/SettingStore";
import { usePersistStore } from "../stores/PersistStore";

export function GetInfoFromSearchParams() {
    const [search] = useSearchParams();
    const groupStore = useGroupStore();
    const cardStore = useCardStore();
    const settingStore = useSettingStore();
    const persistStore = usePersistStore();

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
        if( search.size > 0 ) {
            loadPersist(
                search.get("group"),
                search.get("stack"),
                search.get("card"),
                search.get("content")
            );

            return;
        }
        
        if( settingStore.persist ) {
            const raw = settingStore.persistID;
            // const raw = "math-math_basic-4-0";
            const info = raw.split("-");

            loadPersist(
                info[0],
                info[1],
                info[2],
                info[3],
            );

            return;
        }

        // Recover from previous groupID
        if( persistStore.groupID ) {
            // Set store
            groupStore.changeGroup( persistStore.groupID );
        }

        if( persistStore.stackID ) {
            // Set store
            groupStore.changeStack( Number( persistStore.stackID ));
        }
    }, [ search ] );

    return null;
}