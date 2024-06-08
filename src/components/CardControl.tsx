import { useEventListener } from "ahooks";
import { useEffect } from "react";
import { useCardStore } from "../stores/CardStore";

interface ICardControlProps {
}

export function CardControl({}: ICardControlProps) {
    const cardStore = useCardStore();

    function prev() {
        // updateIndex( index - 1 );
    }

    function next() {
        cardStore.nextContent();
    }

    useEventListener("keydown", e => {
        if (e.key === " ")          next();
        if (e.key === "ArrowLeft")  prev();
        if (e.key === "ArrowRight") next();
    });

    useEffect(() => {
        // Disable space for input select
        const keydown = (e: KeyboardEvent) => {
            if( e.key === " " && e.target instanceof HTMLInputElement ) {
                e.stopImmediatePropagation();
                //@ts-ignore
                document.activeElement?.blur();

                next();
            }
        }

        document.addEventListener("keydown", keydown, true);

        return () => {
            document.removeEventListener("keydown", keydown);
        }
    }, []);

    useEventListener("click", e => {
        if( e.target instanceof HTMLElement && e.target.closest("#card") ) {
            next();
        }
    });
    
    return null;
}