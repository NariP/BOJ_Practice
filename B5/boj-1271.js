/* 1271 */

const fs = require('fs');
let [n, m] = fs.readFileSync('/dev/stdin').toString().split(' ');
n = BigInt(n)
m = BigInt(m)
answer = `${n/m}\n${n%m}`
console.log(answer)

// 출력 형식을 잘 지키자!
// 253 - 1보다 큰 정수일 경우 BigInt 사용하기
// BigInt 끼리 나눗셈을 했을 땐 언제나 소수점 이하를 버림. 즉, 정수가 아닌 결과가 나오지 않음