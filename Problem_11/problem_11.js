const songDecoder = song => song.split("WUB").filter(Boolean).join(" ")

module.exports = songDecoder;
