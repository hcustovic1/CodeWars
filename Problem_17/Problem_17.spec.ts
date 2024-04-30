import { expect, test } from 'vitest'
import { isValidWalk } from './Problem_17'

test('Take a Ten Minutes Walk test case #1', () => {
    expect(isValidWalk(['s', 'e', 'n', 'w'])).toBe(false)
})

test('Take a Ten Minutes Walk test case #2', () => {
    expect(
        isValidWalk(['s', 'e', 'n', 'w', 's', 's', 'w', 'n', 'e', 'n'])
    ).toBe(true)
})

test('Take a Ten Minutes Walk test case #3', () => {
    expect(
        isValidWalk([
            's',
            'e',
            'n',
            'w',
            's',
            's',
            'w',
            'n',
            'e',
            'n',
            'e',
            'w',
        ])
    ).toBe(false)
})

test('Take a Ten Minutes Walk test case #4', () => {
    expect(isValidWalk([])).toBe(false)
})
