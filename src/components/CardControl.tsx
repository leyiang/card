import { useEventListener } from "ahooks";

interface ICardControlProps {
    index: number;
    total: number;
    setIndex: (index: number) => void;
    onCardDone?: () => void;
    elRef: React.MutableRefObject<null>;
}

export function CardControl({ index, setIndex, total, onCardDone }: ICardControlProps) {
    function updateIndex( newIndex: number  ) {
        if (index >= total - 1) {
            return onCardDone?.();
        }

        setIndex( newIndex );
    }

    function prev() {
        updateIndex( index - 1 );
    }

    function next() {
        updateIndex( index + 1 );
    }

    useEventListener("keydown", e => {
        if (e.key === " ")          next();
        if (e.key === "ArrowLeft")  prev();
        if (e.key === "ArrowRight") next();
    });

    useEventListener("click", e => {
        if( e.target instanceof HTMLElement && e.target.closest("#card") ) {
            next();
        }
    });

    return null;
}