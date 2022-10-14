function solution(n) {
    let answer = 0;
    
    for(i = 1;; i++) {
        if(n % i === 1) {
            return i;
        }
    }
}

const n = 10;

console.log(solution(n));