export class NewBoard {

    constructor(
        public name: string
    ) {}
}

export interface Board {
    id: number,
    name: string,
    url_friendly_name: string
}