/* 17496 */
const fs = require('fs');
const [summer, day, space, price] = fs.readFileSync('/dev/stdin').toString().split(' ')
const n = Math.floor((+summer - +day - 1) / +day)
const answer = space * (n + 1) * price
console.log(answer)