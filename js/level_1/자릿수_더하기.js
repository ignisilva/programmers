function solution(n) {
    
    const nDigits = (n + "").length - 1;
        
    let sum = 0;    
    
    for(let i=nDigits; i>=0; i--) {
        const digits = Math.pow(10, i);
        
        sum += Math.floor(n/digits);
        
        n = n%digits;
    }

    return sum;
}

const n = 123;

console.log(solution(n));