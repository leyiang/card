import { MathJax, MathJaxContext } from "better-react-mathjax";
import { useEffect, useState } from "react";

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

    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShow( true );
        }, 50 );
    }, [] );
    
    // Render MathJax
    return (
        <div
            className="card-latex"
            style={{ opacity: show ? 1 : 0 }}
        >
            <MathJaxContext config={config}>
                <MathJax dynamic>{data}</MathJax>
            </MathJaxContext>
        </div>
    );
}