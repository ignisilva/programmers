// 정수 실수 판별 함수
// Number.isInteger(n)

function solution(n) {
    const sqrt = Math.sqrt(n);
    
    return Number.isInteger(sqrt) ? Math.pow(sqrt + 1, 2) : -1;
}

const n = 121;

console.log(solution(n));