const sorting = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    breakPoint: for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      } else {
        break breakPoint;
      }
    }
  }

  console.log(arr);
};

const arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

sorting(arr);
