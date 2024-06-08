import { create } from "zustand";
import { ICardGroup, ICardInfoKey, ICardInfos, ICardStack } from "../types/card-type";
import { CardInfos } from "../cards/info";

interface ICardStore {
    info: ICardInfos;

    groupPtr: ICardInfoKey;
    stackPtr: number;

    group: () => ICardGroup | null;
    stack: () => ICardStack | null;

    changeGroup: (groupPtr: ICardInfoKey) => void;
    changeStack: (stackPtr: number) => void;
}

export const useCardStore = create<ICardStore>()((set, get) => ({
    info: CardInfos,

    groupPtr: Object.keys(CardInfos)[0],
    stackPtr: 0,

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