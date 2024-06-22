import { MathJax, MathJaxContext } from "better-react-mathjax";
import { useEffect, useState } from "react";

interface IRenderLatex {
    data: string;
}

export function RenderLatex({ data }: IRenderLatex) {
    const config = {
        options: {
            enableMenu: false,
        }
    };

    data = `\\[\\displaylines{${ data }}\\]`;

    const [show, setShow] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShow( true );
        }, 50 );
    }, [] );

    return (
        <div
            className="card-latex"
            style={{ opacity: show ? 1 : 0 }}
        >
            <MathJaxContext config={config}>
                <MathJax dynamic>{data}</MathJax>
            </MathJaxContext>
        </div>
    )
}