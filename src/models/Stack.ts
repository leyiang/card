import { id } from "../types/card-type";

export interface iStack {
    name: string;
    slug: string;
}

export class Stack {
	id: id;
    name: string;
    slug: string;


    constructor(id: id, name: string, slug: string) {
        this.id = id;
        this.name = name;
        this.slug = slug;
    }

    static Load(raw: any): Stack {
        return new Stack(
			raw.id, raw.name, raw.slug
		);
    }
} 