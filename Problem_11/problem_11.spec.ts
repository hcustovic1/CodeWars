import { expect, test } from 'vitest'
import { songDecoder } from './problem_11'

test('Dubstep test case #1', () => {
    expect(
        songDecoder('WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB')
    ).toBe('WE ARE THE CHAMPIONS MY FRIEND')
})
