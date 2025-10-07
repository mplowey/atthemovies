export type Theater = {
    id: number,
    name: string,
    tables: Table[]
};

export type Table = {
    id: number,
    table_number: number,
    row: number,
    column: number,
    seats: Seat[]
};

export type Seat = {
    id: number,
    seat_number: number,
    price: number
};