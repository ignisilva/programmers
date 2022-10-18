function solution(numbers) {
  let result = 0;

  const coefficientArray = new Array(10).fill(0);

  numbers.forEach((value) => {
    coefficientArray[value] = 1;
  });

  coefficientArray.forEach((value, index) => {
    if (value === 0) {
      result += index;
    }
  });

  return result;
}
