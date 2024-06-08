import { OrderControl } from "./OrderControl";
import { PersistControl } from "./PersistControl";

export function FooterControl() {
    return (
        <footer className="flex items-center">
            <OrderControl />
            <PersistControl />
        </footer>
    )
}