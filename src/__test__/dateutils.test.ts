import { describe, it, expect } from 'vitest'
import { dateCalc } from '../utils/dateutils.ts'

describe('datecalc', () => {
  it('returns the correct date for a given day index', () => {
    const dayIndex = 3; // Wednesday
    const today = new Date();
    const expectedDaysDiff = dayIndex - today.getDay();
    const expectedDate = new Date(today);
    expectedDate.setDate(today.getDate() + expectedDaysDiff);

    const result = dateCalc(dayIndex);

    expect(result.toDateString()).toBe(expectedDate.toDateString());
  })
});