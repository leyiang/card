import { CardGroup } from "../components/CardGroup";
import { ImportCards } from "../components/ImportCards";

export function MainPage() {
    return (
        <div className="page main-page">
            <ImportCards />
            <CardGroup />
        </div>
    )
}