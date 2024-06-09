import { useCardStore } from "../stores/CardStore";
import { useGroupStore } from "../stores/GroupStore";
import { OrderControl } from "./OrderControl";
import { PersistControl } from "./PersistControl";

export function FooterControl() {
    const groupStore = useGroupStore();
    const cardStore = useCardStore();

    const id = [
        groupStore.groupPtr,
        groupStore.stack().id,
        cardStore.cardPtr,
        cardStore.contentPtr
    ].join("-");

    return (
        <footer className="flex flex-col">
            <div className="flex items-center">
                <OrderControl />
                <PersistControl />
            </div>

            <span className="mt-2 text-gray-700">{ id }</span>
        </footer>
    )
}