import { Content, ContentType } from "../models/Content";
import { RenderImage } from "./renderList/RenderImage";
import { RenderLatex } from "./renderList/RenderLatex";
import { RenderText } from "./renderList/RenderText";

interface RenderContentProps {
    content: Content;
}

export function RenderContent({ content }: RenderContentProps) {

	let render = null;

	if( content.content.startsWith("image:") ) {
		render = <RenderImage data={content.content} />;
	} else {
		if( content.content_type === ContentType.Image ) {
			render = <RenderImage data={content.content} />;
		}

		if( content.content_type === ContentType.Text ) {
			render = <RenderText text={ content.content } />
		}
	
		if( content.content_type === ContentType.Latex ) {
			render = <RenderLatex data={content.content}/>
		}
	}


	if( render ) {
		return (
			<div className="card-content">
				{ render }
			</div>
		);
	} else {
		return (
			<div>
				<span>Unknown content type: {content.content_type}</span>
			</div>
		);
	}

}