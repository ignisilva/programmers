function solution(array, commands) {
  const answer = [];

  for (command of commands) {
    const [startIndex, endIndex, pickIndex] = command;

    const slicedArray = array
      .slice(startIndex - 1, endIndex)
      .sort((a, b) => a - b);

    answer.push(slicedArray[pickIndex - 1]);
  }

  return answer;
}

const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

solution(array, commands);
