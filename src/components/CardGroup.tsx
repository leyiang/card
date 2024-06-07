import { Card } from "./Card.tsx";
import { useState } from "react";

interface ICardGroupProps {
    group: any;
    onGroupDone: () => void;
}

export function CardGroup({ group, onGroupDone }: ICardGroupProps) {
    const [index, setIndex] = useState(0);

    const nextCard = () => {
        if (index >= group.cards.length - 1) {
            onGroupDone?.();
            setIndex(0);
            return;
        }

        setIndex(index + 1);
    }

    return (
        <div className="card-group">
            <header>
                <p className="round info-wrap">
                    <span className="info card-number-info">
                        <span className="current-card-number">{index + 1}</span>
                        /
                        <span className="total-card-number">{group.cards.length}</span>
                    </span>
                    <span>Cards</span>
                </p>
            </header>

            <Card
                card={group.cards[index]}
                onCardDone={nextCard}
            />
        </div>
    )
}