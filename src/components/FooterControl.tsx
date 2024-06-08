import { useCardStore } from "../stores/CardStore";
import { OrderControl } from "./OrderControl";
import { PersistControl } from "./PersistControl";

export function FooterControl() {
    const cardStore = useCardStore();

    return (
        <footer className="flex flex-col">
            <div className="flex items-center">
                <OrderControl />
                <PersistControl />
            </div>

            <span className="mt-2 text-gray-700">{ cardStore.getID() }</span>
        </footer>
    )
}