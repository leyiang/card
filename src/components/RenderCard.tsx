import { RenderImage } from "./renderList/RenderImage";
import { RenderLatex } from "./renderList/RenderLatex";
import { RenderText } from "./renderList/RenderText";

interface IRenderCardProps {
    data: string;
}

export function RenderCard({ data }: IRenderCardProps) {
    // Render Image
    if (data.startsWith("image:")) {
        return <RenderImage data={data} />;
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