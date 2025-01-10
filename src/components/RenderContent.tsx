import { Content, ContentType } from "../models/Content";
import { RenderImage } from "./renderList/RenderImage";
import { RenderLatex } from "./renderList/RenderLatex";
import { RenderText } from "./renderList/RenderText";

interface RenderContentProps {
    content: Content;
}

export function RenderContent({ content }: RenderContentProps) {

	if( content.content_type === ContentType.Image ) {
		return <RenderImage data={content.content} />;
	}

    if( content.content_type === ContentType.Text ) {
        return <RenderText text={ content.content } />
    }
 
	if( content.content_type === ContentType.Latex ) {
		return <RenderLatex data={content.content}/>
	}

    return (
		<div>
			<span>Unknown content type: {content.content_type}</span>
		</div>
    );
}