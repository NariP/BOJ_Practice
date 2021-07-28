/* 3003 */

let fs = require('fs');
let whiteChess = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(ele => parseInt(ele, 10))

const solution = (arr) => {
    const normalChess = [1, 1, 2, 2, 2, 8];
    const answer = normalChess.map((piece, idx) => piece - arr[idx])
    console.log(answer.join(' '));
}

solution(whiteChess)