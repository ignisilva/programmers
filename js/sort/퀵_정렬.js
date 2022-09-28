arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

function sorting(arr, start, end) {
  if (start >= end) return; // 원소가 1개인 경우 종료

  let pivot = start; // 피벗은 첫 번째 원소
  let left = start + 1;
  let right = end;

  while (left <= right) {
    // 피벗보다 큰 데이터를 찾을 때까지 반복
    while (left <= end && arr[left] <= arr[pivot]) left++;
    // 피벗보다 작은 데이터를 찾을 때까지 반복
    while (right > start && arr[right] >= arr[pivot]) right--;
    // 엇갈렸다면 작은 데이터와 피벗을 교체
    if (left > right) [arr[right], arr[pivot]] = [arr[pivot], arr[right]];
    // 엇갈리지 않았다면 작은 데이터와 큰 데이터를 교체
    else [arr[left], arr[right]] = [arr[right], arr[left]];
  }

  // 분할 이후 왼쪽 부분과 오른쪽 부분에서 각각 정렬 수행
  sorting(arr, start, right - 1);
  sorting(arr, right + 1, end);
}

sorting(arr, 0, arr.length - 1);

console.log(arr);
