/* 2338 */

let fs = require('fs');

let [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
a = BigInt(a)
b = BigInt(b)
const solution = (num1, num2) => {
    console.log(`${sum(num1, num2)}\n${sub(num1, num2)}\n${multiply(num1, num2)}`)
}
const sum = (a, b) => a + b;
const sub = (a, b) => a - b;
const multiply = (a, b) => a * b;
solution(a, b)

// 입력 -> Enter -> ctrl + D
// parseInt(string, radix)
// BigInt()
// 여기서 radix의 기본값은 10이 아니니 주의하자!!