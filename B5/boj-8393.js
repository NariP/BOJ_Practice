/* 8393 */

let fs = require('fs');
let num = fs.readFileSync('/dev/stdin').toString().trim();

const solution = (num) => {
    num = parseInt(num, 10)
    console.log(num*(num+1)/2)
}

solution(num)

// N(N+1)/2