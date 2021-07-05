/* 2558 */

let fs = require('fs');
let [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
a = parseInt(a, 10)
b = parseInt(b, 10)

const solution = (a, b) => {
    sum(a, b)
}

const sum = (a, b) => console.log(a + b)

solution(a, b)

// 범위가 적으므로 그냥 parseInt 써서 정수로 바꿔준 뒤 계산해주면 됨