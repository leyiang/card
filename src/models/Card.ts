import { id } from "../types/card-type";
import { Content } from "./Content";

export interface iCard {
	id: id;
	content: string;
	stack: string;
}

export class Card {
	id: id;
	rawContent: string;
	contents: Content[];
	stack: string;

	constructor(id: id, stack: string, rawContent: string) {
		this.id = id;
		this.rawContent = rawContent;
		this.contents = Card.ParseContent(rawContent);
		this.stack = stack;
	}

	static ParseContent( content: string  = "[]") : Content[] {
		const rawList = JSON.parse( content );

		if( Array.isArray(rawList) ) {
			rawList.forEach( content => {
				console.log( content );
			});

			return rawList.map(
				(content: any) => Content.Load(content)
			);
		}

		return [];
	}

	addContent(content: string = "") {
		const newContent = Content.GetNewContent(content);
		this.contents.push(newContent);
		return newContent;
	}

	static Load(raw: any): Card {
		const card = new Card(raw.id, raw.stack, raw.content);

		if( Array.isArray(raw.contents) ) {
			card.contents = raw.contents.map(
				(contentRaw: any) => Content.Load(contentRaw)
			);
		}

		return card;
	}

	static GetNewCard(): Card {
		const card = new Card(
			crypto.randomUUID(),
			"",
			"[]"
		);

		card.contents.push(Content.GetNewContent(""));

		return card;
	}

	getRawContent() {
		const list = this.contents.map(
			content => content.toJSON()
		);

		return JSON.stringify(list);
	}

	toJSON(): iCard {
		return {
			id: this.id,
			stack: this.stack,
			content: this.getRawContent()
		};
	}

	getContent(index: number): Content | undefined {
		return this.contents[index];
	}

	updateContent(index: number, content: string) {
		if (this.contents[index]) {
			this.contents[index].content = content;
		}
	}

	get length() {
		return this.contents.length;
	}

	updateContentById(contentId: id, newContent: Content) {
		const index = this.contents.findIndex(c => c.id === contentId);

		if (index !== -1) {
			this.contents[index] = newContent;
		}

		this.rawContent = this.getRawContent();
	}
}
