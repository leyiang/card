import { useSearchParams } from "react-router-dom";
import { useGroupStore } from "../stores/GroupStore";

export function GetInfoFromSearchParams() {
    const [search] = useSearchParams();
    const groupStore = useGroupStore();

    if( search.get("group") ) groupStore.changeGroup( search.get("group")! );

    return null;
}