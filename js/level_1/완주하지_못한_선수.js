function solution(participant, completion) {
  const map = new Map();

  participant.forEach((name) => {
    if (!map.has(name)) {
      map.set(name, 0);
    }
    map.set(name, map.get(name) + 1);
  });

  completion.forEach((name) => {
    if (!map.has(name)) {
      map.set(name, 0);
    }
    map.set(name, map.get(name) + 1);
  });

  const arr = [...map];

  for (item of arr) {
    [name, count] = item;
    if (count % 2 === 1) {
      return name;
    }
  }
}
