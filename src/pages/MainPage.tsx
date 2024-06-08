import JSConfetti from "js-confetti";
import { CardGroup } from "../components/CardGroup";

export function MainPage() {
    const showConfetti = () => {
        const jsConfetti = new JSConfetti()
        jsConfetti.addConfetti()
    }

    return (
        <div className="page main-page">
            <CardGroup onGroupDone={ showConfetti } />
        </div>
    )
}