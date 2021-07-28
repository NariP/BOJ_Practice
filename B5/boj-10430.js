/* 10430 */

let fs = require('fs');
let [A, B, C] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(ele => parseInt(ele, 10))

const solution = (A, B, C) => {
    console.log(`${(A+B)%C}\n${((A%C) + (B%C))%C}\n${(A*B)%C}\n${((A%C) * (B%C))%C}`)
}

solution(A, B, C)