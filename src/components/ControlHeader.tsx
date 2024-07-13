import { GroupSelector } from "./GroupSelector";
import { StackSelector } from "./StackSelector";
import { SearchInput } from "./SearchInput";
import { useCardStore } from "../stores/CardStore";
import { Button } from "antd";
import { useNavigate, useSearchParams } from "react-router-dom";

export function ControlHeader() {
    const cardStore = useCardStore();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    
    function clearSearchParams() {
        navigate("/");
    }


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

            <div className="ml-auto">
                {
                    (searchParams.size > 0) &&

                    <Button
                        className="mr-2"
                        onClick={ clearSearchParams }
                    >Clear Search</Button>
                }

                <SearchInput />
            </div>
        </header>
    )
}