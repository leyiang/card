import JSConfetti from "js-confetti";
import { CardGroup } from "../components/CardGroup";
import { ImportCards } from "../components/ImportCards";

export function MainPage() {
    const showConfetti = () => {
        const jsConfetti = new JSConfetti()
        jsConfetti.addConfetti()
    }

    return (
        <div className="page main-page">
            <ImportCards />
            <CardGroup onGroupDone={ showConfetti } />
        </div>
    )
}