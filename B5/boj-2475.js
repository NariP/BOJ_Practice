/* 2475 */

const solution = (data) => {
    const answer = data.reduce((acc, cur) => acc + Math.pow(cur, 2), 0) % 10
    console.log(answer)
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ').map((el) => parseInt(el));
})
    .on('close', function () {
        solution(input);

        process.exit();
    });

// 거듭제곱 함수 pow(대상 숫자, 거듭제곱 횟수)
// reduce 함수