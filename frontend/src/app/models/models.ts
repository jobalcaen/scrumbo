export interface BoardName {

    name: string
}

export interface Board {
    id: number,
    name: string,
    url_friendly_name: string
}

export interface Note {
    id?: number,
    body: string,
    top: number,
    left: number
}

export interface websocketEvent {
    type: string,
    payload: {
        notes?: Note[],
        note?: Note,
        note_id?: number,
        top?: number,
        left?: number
    }
}

export interface coordinates {
    top: number,
    left: number
}