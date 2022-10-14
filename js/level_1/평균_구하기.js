function solution(arr) {
    const sum = arr.reduce((a, b) => a + b, 0);
    
    return sum/arr.length;
}

const arr = [1,2,3,4];

console.log(solution(arr));