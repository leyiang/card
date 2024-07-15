import { create } from "zustand";
import { ICardGroup, ICardInfoKey, ICardInfos, ICardStack } from "../types/card-type";
import { CardInfos } from "../cards/info";
import { usePersistStore } from "./PersistStore";

interface IGroupStore {
    info: ICardInfos;

    groupPtr: ICardInfoKey;
    stackPtr: number;

    group: () => ICardGroup;
    stack: () => ICardStack;

    changeGroup: (groupPtr: ICardInfoKey) => void;
    changeStack: (stackPtr: number) => void;

    // Get Current Card ID
    cache: any;
}

/**
 * Ensure shuffled cards are sync
 */
export const useGroupStore = create<IGroupStore>()((set, get) => ({
    info: CardInfos,

    groupPtr: Object.keys(CardInfos)[0],
    stackPtr: Number( usePersistStore.getState().stackID ) || 0,

    cardPtr: 0,
    contentPtr: 0,

    cache: {},

    group() {
        return get().info[
            get().groupPtr
        ];
    },

    stack() {
        const grp = get().group();
        return grp[ get().stackPtr ]
    },

    changeGroup(groupPtr: ICardInfoKey) {
        if (!(groupPtr in CardInfos)) {
            console.error("Try to switch a non-exist group");
            return;
        }

        set({
            groupPtr,
            stackPtr: 0,
        });
    },

    changeStack(stackPtr: number) {
        const grp = get().group();
        if( ! grp ) return null;
        if( stackPtr > grp.length - 1 ) return null;
        
        set({
            stackPtr,
        });
    }
}))