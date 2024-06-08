import { create } from "zustand";
import { ICard } from "../types/card-type";

interface ICardStore {
    cards: ICard[],

    cardPtr: number;
    contentPtr: number;

    card: () => ICard;
    importCards: (cards: ICard[]) => void;

    nextCard: () => void;
    setCardPtr: (newCardPtr: number) => void;
}

/**
 * Ensure shuffled cards are sync
 */
export const useCardStore = create<ICardStore>()((set, get) => ({
    cards: [
        ["<card-not-set>"]
    ],

    cardPtr: 0,
    contentPtr: 0,

    card: () => {
        return get().cards[
            get().cardPtr
        ];
    },

    importCards( cards: ICard[] ) {
        set({
            cards: cards,
            cardPtr: 0,
            contentPtr: 0,
        });
    },

    setCardPtr( newCardPtr: number ) {
        if( newCardPtr >= get().cards.length ) {
            newCardPtr = 0;
        } else if ( newCardPtr < 0 ) {
            newCardPtr = get().cards.length - 1;
        }

        set({ cardPtr: newCardPtr })
    },

    nextCard() {
        get().setCardPtr( get().cardPtr + 1 );
    }
}))