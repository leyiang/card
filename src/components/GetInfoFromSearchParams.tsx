import { useSearchParams } from "react-router-dom";
import { useCardStore } from "../stores/CardStore";

export function GetInfoFromSearchParams() {
    const [search] = useSearchParams();
    const cardStore = useCardStore();

    if( search.get("group") ) cardStore.changeGroup( search.get("group")! );

    return null;
}