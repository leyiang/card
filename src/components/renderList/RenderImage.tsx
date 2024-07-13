import { RenderLatex } from "./RenderLatex";
import { RenderText } from "./RenderText";

interface IRenderImage {
    data: string;
}

export function RenderImage({ data }: IRenderImage) {

    let caption = null;
    let mode = "math" as "math" | "text";
    let raw = data.substring(6);

    if (/^image:.*\(.*\)$/.test(data)) {
        raw = raw.replace(/\((.*)\)$/g, (_, text) => {
            caption = text;
            mode = "math";
            return "";
        });
    }

    if (/^image:.*\[.*\]$/.test(data)) {

        raw = raw.replace(/\[(.*)\]$/g, (_, text) => {
            caption = text;
            mode = "text";
            return "";
        });
    }

    const src = `/images/${raw}`;

    function zoomImage(e: React.MouseEvent) {
        // Ctrl + click to open image in new tag
        if( ! e.ctrlKey ) return;
        
        e.stopPropagation();

        const url = "http://" + window.location.host + src;
        window.open( url );
    }

    return (
        <div className="flex flex-col w-full text-center img-wrap">
            <div className="flex justify-center">
                <img
                    src={src}
                    className="card-img mb-4"
                    onClick={ zoomImage }
                />
            </div>

            {
                caption &&
                (
                    mode == "math"
                        ? <RenderLatex data={caption} />
                        : <RenderText text={caption} />
                )
            }
        </div>
    )
}