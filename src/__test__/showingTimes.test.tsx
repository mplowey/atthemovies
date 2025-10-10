import { describe, it, expect, vi} from 'vitest'
import { render, screen } from '@testing-library/react'
import { type Showing} from '../Models/Showing'
import ShowingTimes from '../ShowingTimes'

vi.mock('../Services/ApiService', () => ({
  getAsync: () => {
    return Promise.resolve([{ id: 1, film_id: 2, theater_id: 3, showing_time: '1234'}])
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
    }),

    it('should render showing times', async () => {
      // arrange
      render(<ShowingTimes filmId="1" selectedDate="Mon" />);
      await getAsync<Showing[]>("http://localhost:3008/showings");

      // act
      screen.debug();

      // assert

    })
});