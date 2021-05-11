/* 1001 */
const fs = require('fs');
const [A, B] = fs.readFileSync('/dev/stdin').toString().split(' ');

/* Number() */
// console.log(Number(A) - Number(B))

/* parseInt() */
console.log(parseInt(A) - parseInt(B))  