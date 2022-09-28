const solution = (a, b) => {
  let i = a;
  let j = b;
  let r = 0;
  let ij = i * j;

  for (; (r = i % j); i = j, j = r) {}

  console.log(`GCD : ${j}`);
  console.log(`LCM : ${ij / j}`);
};

const a = 192;
const b = 162;
console.log(solution(a, b));
