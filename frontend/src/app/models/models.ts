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
    x_position: number,
    y_position: number
}

export interface websocketEvent {
    type: string,
    notes?: Note[],
    note?: Note

}