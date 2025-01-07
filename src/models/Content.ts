import { id } from "../types/card-type";

export interface iContent {
	id: id;
	content: string;
}

export enum ContentType {
	Text = "text",
	Image = "image",
	Latex = "latex"
}

export class Content {
	id: id;
	content: string;
	content_type: ContentType;

	constructor(
		id: id,
		content: string,
		type: ContentType = ContentType.Text
	) {
		this.id = id;
		this.content = content;
		this.content_type = type;
	}

	static Load( raw: any ): Content {
		const content = new Content(
			raw.id,
			raw.content,
			raw.content_type
		);

		return content;
	}

	static GetNewContent(content: string, type: ContentType = ContentType.Text) {
		return new Content(
			crypto.randomUUID(),
			content,
			type
		);
	}

	toJSON() : iContent {
		return {
			id: this.id,
			content: this.content
		};
	}
}