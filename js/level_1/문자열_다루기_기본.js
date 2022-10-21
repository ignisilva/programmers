function solution(s) {
  if (s.length !== 4 || s.length !== 6) return false;

  const splited = s.split("");

  for (value of splited) {
    const isNumberCondition =
      48 <= value.charCodeAt() && value.charCodeAt() <= 57;

    if (!isNumberCondition) return false;
  }

  return true;
}
