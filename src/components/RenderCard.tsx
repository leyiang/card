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