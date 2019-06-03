export interface BoardName {

    name: string
}

export interface Board {
    id: number,
    name: string,
    url_friendly_name: string
}

export interface Note {
    id: number,
    body: string,
    board: number
}

export interface webSocketNotes {
    notes: Note[]
}