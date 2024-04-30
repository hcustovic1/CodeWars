import { expect, test } from 'vitest'
import { isSquare } from './Problem_16'

test('A square of squares test case #1', () => {
    expect(isSquare(34)).toBe(false)
})

test('A square of squares test case #2', () => {
    expect(isSquare(25)).toBe(true)
})

test('A square of squares test case #3', () => {
    expect(isSquare(-334)).toBe(false)
})

test('A square of squares test case #4', () => {
    expect(isSquare(1)).toBe(true)
})
