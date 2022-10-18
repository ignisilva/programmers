function solution(absolutes, signs) {
  let result = 0;

  signs.forEach((sign, index) => {
    const value = sign ? absolutes[index] : -1 * absolutes[index];

    result += value;
  });

  return result;
}
