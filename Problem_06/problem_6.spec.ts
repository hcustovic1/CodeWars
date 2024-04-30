import { expect, test } from 'vitest'
import { toCamelCase } from './problem_6'

test('Convert string to camel case test case #1', () => {
    expect(toCamelCase('the_stealth_warrior')).toBe('theStealthWarrior')
})

test('Convert string to camel case test case #2', () => {
    expect(toCamelCase('The-Stealth-Warrior')).toBe('TheStealthWarrior')
})
