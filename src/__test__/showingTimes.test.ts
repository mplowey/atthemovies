import { describe, it, expect, vi } from 'vitest'
import { type Showing} from '../Models/Showing'

vi.mock('../Services/ApiService', () => ({
  getAsync: () => {
    return [{ id: 1, film_id: 2, theater_id: 3, showing_time: '1234'}]
  }
}))

import { getAsync } from '../Services/ApiService'


describe('ShowingTimes', () => {
    it('should fetch showing times', async () => {
        // arrange
        const expectedShowing: Showing[] = [{ id: 1, film_id: 2, theater_id: 3, showing_time: '1234'}]

        // act
        const showingResponse = await getAsync<Showing[]>("http://localhost:3008/showings");

        // assert
        expect(showingResponse).toEqual(expectedShowing);
    })
});