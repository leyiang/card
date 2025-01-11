import { id } from "../types/card-type";

export interface iGroup {
    name: string;
    slug: string;
}

export class Group {
	id: id;
    name: string;
    slug: string;


    constructor(id: id, name: string, slug: string) {
        this.id = id;
        this.name = name;
        this.slug = slug;
    }

    static Load(raw: any): Group {
        return new Group(
			raw.id, raw.name, raw.slug
		);
    }
} 