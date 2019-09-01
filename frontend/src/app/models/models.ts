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
    notes?: Note[],
    note?: Note
    
}

export interface coordinates {
    top: number,
    left: number
}