/* 1550 */

const solution = (data) => {
    const answer = hexToDeciaml(data)
    console.log({data, answer})
}
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function(input) {
    solution(input)

    rl.close();
}).on("close", function() {
    process.exit();
});

const hexToDeciaml = hex => {
    return parseInt(hex, 16)
}

// 16진수 -> 10진수
// parseInt()
