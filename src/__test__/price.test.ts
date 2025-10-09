import { describe, it, expect } from 'vitest'
import { type Seat } from '../Models/Theater'
import { calcPrice } from '../utils/priceutil'

describe('price', () => {
    it('should correctly calculate the total price of multiple selected reservations', () => {
        // arrange
        const seat1: Seat = { id: 1, seat_number: 1, price: 100}
        const seat2: Seat = { id: 2, seat_number: 2, price: 200}
        const expectedPrice = 300;

        // act
        const actualPrice = calcPrice([seat1, seat2]);
        console.log(`actualPrice: ${actualPrice}`);
        // assert
        expect(actualPrice).toBe(expectedPrice)
    })
});