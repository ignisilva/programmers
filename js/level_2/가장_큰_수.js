function solution(numbers) {
  const max = Math.max(...numbers);
  if (max === 0) return "0";

  return numbers
    .map((value) => String(value))
    .sort((a, b) => {
      console.log(a);
      console.log(b);
      return a + b - (b + a);
    });
}

const numbers = [3, 30, 34];

console.log(solution(numbers));
