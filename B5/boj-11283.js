/* 11283 */
const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();

console.log(input.charCodeAt(0) - 44032 + 1)

const separateWord = cur => {
    const BASE = 44032;
    const [firstInterval, middleInterval] = [588, 28]
    const [first, middle, last] = [[
        'ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ',
        'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ',
        'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
    ], [
        'ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ',
        'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ',
        'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'
    ], [
        '', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ',
        'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ',
        'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ',
        'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'
    ]]

    const curMinusBase = cur - BASE
    const firstIdx = Math.floor(curMinusBase / firstInterval)
    const middleIdx = Math.floor((curMinusBase - firstInterval * firstIdx) / middleInterval)
    const lastIdx = (curMinusBase - firstInterval * firstIdx) % middleInterval

    console.log(first[firstIdx], middle[middleIdx], last[lastIdx] ?? '')
}

separateWord(input.charCodeAt(0))

// 문제를 잘 읽고 생각해보자!