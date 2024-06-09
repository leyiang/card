import { MathJax, MathJaxContext } from "better-react-mathjax";

interface IRenderCardProps {
    data: string;
}

export function RenderCard({ data }: IRenderCardProps) {
    // Render Image
    if (data.startsWith("image:")) {
        const raw = data.substring(6);
        const src = `/images/${raw}`;

        return (
            <img
                src={src}
                className="card-img"
            />
        );
    }

    if( data.startsWith("text:") ) {
        data = data.substring(5);

        // Manually break by line-break
        // change \n with <br />
        const chunks = data.split("\\n");
        
        return (
            <article>
                {
                    chunks.map( (line, i) => (
                        <p key={ "render-line-" + i }>{ line }</p>
                    ))
                }
            </article>
        )
    }

    data = `\\[\\displaylines{${ data }}\\]`;

    const config = {
        options: {
            enableMenu: false,
        }
    };

    // Render MathJax
    return (
        <div className="card-latex">
            <MathJaxContext config={config}>
                <MathJax dynamic>{data}</MathJax>
            </MathJaxContext>
        </div>
    );
}