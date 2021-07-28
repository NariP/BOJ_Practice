/* 3046 */
let fs = require('fs');
let [r1, s] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(ele => parseInt(ele, 10))

const solution = (a, b) => {
    const answer = 2 * b - a
    console.log(answer)
}

solution(r1, s)