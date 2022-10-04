function solution(x, n) {
    const answer = [];
    
    for(let i=x; answer.length<n; i+=x) {
        answer.push(i)
    }
    
    return answer;
}

const x = 2;

const n = 5;

console.log(solution(x, n));