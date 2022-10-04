function solution(n) {
    return (n + "").split("").map(n => Number(n)).reverse();
}

const n = 12345;

console.log(solution(n));