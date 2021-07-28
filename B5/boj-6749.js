/* 6749 */

const solution = (data) => {
    const [Y, M] = data.map(ele => parseInt(ele, 10))
    console.log(2*M - Y)
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