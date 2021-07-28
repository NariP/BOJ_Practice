/* 2914 */

let fs = require('fs');
let [I, A] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(ele => parseInt(ele, 10))

const solution = (a, b) => {
    console.log(a * (b - 1) + 1);
}

solution(I, A)