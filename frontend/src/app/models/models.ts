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
}

export interface webSocketNotes {
    notes: Note[]
}

export interface websocketEvent {
    type: string,
    notes?: Note[],
    note?: Note

}