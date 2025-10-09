import { type Seat } from "../Models/Theater";
export const calcPrice = (seats: Seat[]) => {
    const sum = seats.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);
    return sum;
}