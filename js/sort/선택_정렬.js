const sorting = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const min = Math.min(...arr.slice(i));

    const minIndex = arr.findIndex((item) => item === min);

    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  console.log(arr);
};

const arr = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

sorting(arr);
