export const songDecoder = (song: string): string =>
    song.split('WUB').filter(Boolean).join(' ')
