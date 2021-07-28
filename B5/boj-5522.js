/* 5522 */

const solution = (data) => {
    const answer = data.reduce((acc, cur) => {
        return acc + parseInt(cur, 10)
    }, 0)
    console.log(answer)
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line)
})
    .on('close', function () {
        solution(input);

        process.exit();
    });