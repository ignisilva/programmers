function solution(a, b) {
  let innerProduct = 0;

  for (let i = 0; i < a.length; i++) {
    innerProduct += a[i] * b[i];
  }

  return innerProduct;
}
