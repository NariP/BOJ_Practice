/* 10757 */
const fs = require('fs');
let [n, m] = fs.readFileSync('/dev/stdin').toString().split(' ');
n = BigInt(n)
m = BigInt(m)
console.log((n + m).toString())음

// BigInt
// .toString()을 해야 뒤에 n이 안 붙