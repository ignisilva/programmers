function solution(x) {
    const origin = x;
    
    const nDigits = (x + "").length - 1;
        
    const eachDigit= [];    
    
    for(let i=nDigits; i>=0; i--) {
        const digits = Math.pow(10, i);
        
        eachDigit.push(Math.floor(x/digits));
        
        x = x%digits;
    }
    
    const sum = eachDigit.reduce((a, b) => a + b, 0);
    
    return origin%sum === 0;
}

const x = 10;

console.log(solution(x));