import { expect, test } from 'vitest'
import { anagrams } from './problem_9'

test('Anagrams test case #1', () => {
    expect(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])).toStrictEqual([
        'aabb',
        'bbaa',
    ])
})
