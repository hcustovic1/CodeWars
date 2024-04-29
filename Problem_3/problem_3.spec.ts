import { test, expect } from 'vitest'
import { digitalRoot } from './problem_3'

test('Digital root test case #1', () => {
    expect(digitalRoot(0)).toBe(0)
})

test('Digital root test case #2', () => {
    expect(digitalRoot(456)).toBe(6)
})

test('Digital root test case #3', () => {
    expect(digitalRoot(16)).toBe(7)
})
