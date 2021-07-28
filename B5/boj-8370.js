/* 8370 */

let fs = require('fs');
let [n1, k1, n2, k2] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(ele => parseInt(ele, 10))

const solution = (n1, k1, n2, k2) => {
    const answer = n1 * k1 + n2 * k2;
    console.log(answer)
}

solution(n1, k1, n2, k2)