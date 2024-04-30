import { expect, test } from 'vitest'
import { maxSequence } from './problem_10'

test('Maximum subarray sum test case #1', () => {
    expect(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6)
})

test('Maximum subarray sum test case #2', () => {
    expect(maxSequence([])).toBe(0)
})
