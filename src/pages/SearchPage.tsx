import { Link, useSearchParams } from "react-router-dom";
import { useCardStore } from "../stores/CardStore";
import { ICard } from "../types/card-type";
import { Card } from "../components/Card";
import { SearchInput } from "../components/SearchInput";

export function SearchPage() {
    const [searchParams] = useSearchParams();

    // Search Value
    const cardStore = useCardStore();
    const raw = searchParams.get("v") ?? "";
    const needle = raw;
    // const needle = raw.replace("\\", "\\\\");
    // console.log( needle );

    interface Search {
        card: ICard;
        index: number;
        link: string;

        id: string;
    }

    const searchResult = [] as Search[];

    Object.keys(cardStore.info).forEach(key => {
        const group = cardStore.info[key];
        group.forEach(stack => {
            stack.cards.forEach((card, cardPtr) => {
                let toSearch = card.slice(0).map(content => content.replaceAll(" ", "").toLocaleLowerCase());

                toSearch.forEach((content, contentPtr) => {
                    if (content.includes(needle)) {
                        const id = [ key, stack.id, cardPtr, contentPtr].join(' ');
                        console.log(content, contentPtr);

                        searchResult.push({
                            id,
                            card,
                            index: contentPtr,
                            link: `group=${key}&stack=${stack.id}&card=${cardPtr}&content=${contentPtr}`
                        })
                    }
                });
            });
        });
    });

    return (
        <div className="page main-page">
            <Link
                to={"/"}
                className="text-2xl"
            >Home</Link>

            <div className="mb-4 flex justify-between min-w-[700px]">
                <h1 className="text-2xl font-bold">Search Result:</h1>
                <SearchInput inputValue={ raw } />
            </div>

            <div className="flex flex-col gap-4 overflow-y-auto h-[600px]">
                {
                    searchResult.map((result, i) => (
                        <div
                            key={"search-result-" + i}
                            className="flex flex-col"
                        >
                            <span>{ result.id }</span>
                            <Link
                                to={"/?" + result.link}
                            >
                                <Card
                                    card={result.card}
                                    noInteraction
                                    compact
                                    startIndex={result.index}
                                />
                            </Link>
                        </div>
                    ))
                }

                {
                    searchResult.length === 0 &&
                    <span>nothing found</span>
                }
            </div>
        </div>
    )
}