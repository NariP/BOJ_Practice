/* 2845 */

const getClearData = data => {
    return data.map(ele => ele.split(' ').map(item => parseInt(item)));
}

const solution = (data) => {
    const [[people, square], newsCount] = getClearData(data)
    const answer = newsCount.map((ele) => {
        return ele - (people * square)
    })
    console.log(answer.join(' '))
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

// 여러줄 입력