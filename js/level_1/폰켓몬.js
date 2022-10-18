// 풀이를 보고 푼 문제
// 입출력에서 규칙성을 찾아내는 능력이 모자람
//
function solution(nums) {
  const numLength = nums.length;

  const kindsLength = [...new Set(nums)].length;

  const numOfShouldPick = numLength / 2;

  return kindsLength >= numOfShouldPick ? numOfShouldPick : kindsLength;
}
