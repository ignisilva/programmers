function solution(n) {
  const result = "수박".repeat(Math.floor(n / 2)) + (n % 2 === 0 ? "" : "수");

  return result;
}
