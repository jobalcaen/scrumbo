export interface Board {
    id: number,
    name: string,
    url_friendly_name: string
}

export interface Note {
    id?: number,
    body: string,
    top: number,
    left: number,
    color: string
}

export interface Column {
    id: number,
    title: string,
    created_at: string,
}

export interface websocketEvent {
    type: string,
    payload: {
        notes?: Note[],
        note?: Note,
        id?: number,
        top?: number,
        left?: number,
        body?: string,
        column?: Column,
        columns?: Column[],
        title?: string,
        columns_container_width?: number
    }
}

export interface NewNoteButton {
    top: number,
    left: number,
    color: string,
}
