import { RenderLatex } from "./renderList/RenderLatex";
import { RenderText } from "./renderList/RenderText";

interface IRenderCardProps {
    data: string;
}

export function RenderCard({ data }: IRenderCardProps) {
    // Render Image
    if (data.startsWith("image:")) {
        let caption = null;
        let mode = "math" as "math" | "text";
        let raw = data.substring(6);

        if(/^image:.*\(.*\)$/.test(data)) {
            raw = raw.replace(/\((.*)\)$/g, (_, text) => {
                caption = text;
                mode = "math";
                return "";
            });
        }

        if(/^image:.*\[.*\]$/.test(data)) {
            
            raw = raw.replace(/\[(.*)\]$/g, (_, text) => {
                caption = text;
                mode = "text";
                return "";
            });
        }


        const src = `/images/${raw}`;

        return (
            <div className="flex flex-col w-full text-center">
                <img
                    src={src}
                    className="card-img mb-4"
                />

                {
                    caption &&
                    (
                        mode == "math"
                            ? <RenderLatex data={ caption } />
                            : <RenderText text={ caption } />
                    )
                }
            </div>
        );
    }

    if( data.startsWith("text:") ) {
        data = data.substring(5);
        return <RenderText text={ data } />
    }
 
    // Render MathJax
    return (
        <RenderLatex data={data}/>
    );
}