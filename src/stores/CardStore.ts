import { create } from "zustand";
import { ICardGroup, ICardInfoKey, ICardInfos, ICardStack } from "../types/card-type";
import { CardInfos } from "../cards/info";

interface ICardStore {
    info: ICardInfos;

    groupPtr: ICardInfoKey;
    stackPtr: number;

    cardPtr: number;
    contentPtr: number;

    group: () => ICardGroup | null;
    stack: () => ICardStack | null;

    changeGroup: (groupPtr: ICardInfoKey) => void;
    changeStack: (stackPtr: number) => void;

    // Just to sync these local-params
    // no function in the store
    setCardPtr: (cardPtr: number) => void;
    setContentPtr: (contentPtr: number) => void;

    // Get Current Card ID
    getID: () => string;
}

export const useCardStore = create<ICardStore>()((set, get) => ({
    info: CardInfos,

    groupPtr: Object.keys(CardInfos)[0],
    stackPtr: 0,

    cardPtr: 0,
    contentPtr: 0,

    setCardPtr( cardPtr ) {
        set({ cardPtr });
    },

    setContentPtr( contentPtr ) {
        set({ contentPtr });
    },

    getID() {
        return [
            get().groupPtr,
            get().stack()?.id ?? "<ns-id>",
            get().cardPtr,
            get().contentPtr,
        ].join("-");
    },

    group() {
        return get().info[
            get().groupPtr
        ] ?? null;
    },

    stack() {
        const grp = get().group();
        if( ! grp ) return null;
        return grp[ get().stackPtr ] ?? null;
    },

    changeGroup(groupPtr: ICardInfoKey) {
        if (!(groupPtr in CardInfos)) {
            console.error("Try to switch a non-exist group");
            return;
        }
        if( groupPtr === get().groupPtr ) return;

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