import { assert, describe, test } from 'vitest'
import { duplicateCount } from './Problem_18'

describe('Problem_18: Count the number of Duplicates', function () {
    test('test', function () {
        assert.equal(duplicateCount(''), 0)
        assert.equal(duplicateCount('abcde'), 0)
        assert.equal(duplicateCount('aabbcde'), 2)
        assert.equal(duplicateCount('aabBcde'), 2, 'should ignore case')
        assert.equal(duplicateCount('Indivisibility'), 1)
        assert.equal(
            duplicateCount('Indivisibilities'),
            2,
            'characters may not be adjacent'
        )
    })
})
