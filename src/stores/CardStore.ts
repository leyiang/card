import { create } from "zustand";
import { ICard } from "../types/card-type";
import JSConfetti from "js-confetti";

interface ICardStore {
    cards: ICard[],

    cardPtr: number;
    contentPtr: number;

    card: () => ICard;
    importCards: (cards: ICard[]) => void;

    nextCard: () => void;
    setCardPtr: (newCardPtr: number) => void;

    prevContent: () => void;
    nextContent: () => void;
    setContentPtr: (newContentPtr: number) => void;
}

function roundComplete() {
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti()
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
            roundComplete();
        } else if ( newCardPtr < 0 ) {
            newCardPtr = get().cards.length - 1;
        }

        set({ cardPtr: newCardPtr })
    },

    nextCard() {
        get().setCardPtr( get().cardPtr + 1 );
    },

    setContentPtr( newContentPtr: number ) {
        if( newContentPtr < 0 ) {
            let ptr = get().cardPtr - 1;

            if( ptr < 0 ) {
                ptr = get().cards.length - 1;
            }

            set({
                cardPtr: ptr,
                contentPtr: get().cards[ptr].length - 1,
            });

            return;
        } else if( newContentPtr >= get().card().length ) {
            set({
                contentPtr: 0,
            });

            get().nextCard();
            return;
        }

        set({ contentPtr: newContentPtr });
    },

    prevContent() {
        get().setContentPtr( get().contentPtr - 1 );
    },

    nextContent() {
        get().setContentPtr( get().contentPtr + 1 );
    }
}))