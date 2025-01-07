import { id } from "../types/card-type";
import { Content, iContent } from "./Content";

export interface iCard {
	id: id;
	contents: iContent[];
}

export class Card {
	id: id;
	contents: Content[];

	constructor(id: id) {
		this.id = id;
		this.contents = [];
	}

	addContent(content: string = "") {
		const newContent = Content.GetNewContent(content);
		this.contents.push(newContent);
		return newContent;
	}

	static Load(raw: any): Card {
		const card = new Card(raw.id);

		if( Array.isArray(raw.contents) ) {
			card.contents = raw.contents.map(
				(contentRaw: any) => Content.Load(contentRaw)
			);
		}

		return card;
	}

	static GetNewCard(): Card {
		const card = new Card(
			crypto.randomUUID()
		);

		card.contents.push(Content.GetNewContent(""));

		return card;
	}

	static toJSON(card: Card): iCard {
		return {
			id: card.id,
			contents: card.contents.map(
				content => content.toJSON()
			)
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
	}
}