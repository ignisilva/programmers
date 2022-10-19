function solution(s) {
  const startIndex = Math.ceil(s.length / 2) - 1;

  const endIndex = s.length % 2 === 0 ? 2 : 1;

  const result = s.substr(startIndex, endIndex);

  return result;
}
