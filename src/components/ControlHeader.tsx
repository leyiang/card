import { GroupSelector } from "./GroupSelector";
import { StackSelector } from "./StackSelector";
import { SearchInput } from "./SearchInput";
import { useCardStore } from "../stores/CardStore";

export function ControlHeader() {
    const cardStore = useCardStore();

    return (
        <header className="flex items-center">
            <p className="round info-wrap">
                <span className="info card-number-info">
                    <span className="current-card-number">{ cardStore.cardPtr + 1 }</span>
                    /
                    <span className="total-card-number">{ cardStore.cards.length }</span>
                </span>
                
                <span>Cards</span>
            </p>
            
            <GroupSelector />
            <StackSelector />

            <SearchInput />
        </header>
    )
}