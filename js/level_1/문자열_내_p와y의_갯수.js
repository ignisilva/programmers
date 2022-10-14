function solution(s){
    const refined = s.toUpperCase().split("");
    
    const pCount = refined.filter(char => char === "P").length;
    
    const yCount = refined.filter(char => char === "Y").length;

    return pCount === yCount;
}

const s = "pPooOYy";

console.log(solution(s));