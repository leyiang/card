import { CardGroup } from "../components/CardGroup";
import group from "../cards/math/basic.ts"

export function MainPage() {
    const showConfetti = () => {

    }

    return (
        <div className="page main-page">
            <CardGroup
                group={ group }
                onGroupDone={ showConfetti }
            />
        </div>
    )
}