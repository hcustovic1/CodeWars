import { expect, test } from 'vitest'
import { SeriesSum } from './problem_14'

test('Sum of the first nth term of Series test case #1', () => {
    expect(SeriesSum(1)).toBe('1.00')
})

test('Sum of the first nth term of Series test case #2', () => {
    expect(SeriesSum(2)).toBe('1.25')
})

test('Sum of the first nth term of Series test case #3', () => {
    expect(SeriesSum(5)).toBe('1.57')
})
