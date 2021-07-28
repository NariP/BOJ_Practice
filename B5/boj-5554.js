/* 5554 */

const divMod = (x, y) => {
    return [Math.floor(x / y), x % y]
}

const solution = (data) => {
    const answer = data.reduce((acc, cur) => {
        return acc + parseInt(cur, 10)
    }, 0)
    const [minute, sec] = divMod(answer, 60)
    console.log(minute + '\n' + sec)
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