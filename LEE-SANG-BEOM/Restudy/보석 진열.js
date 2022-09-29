function solution(gems) {
  let answer = [0, gems.length];

  let start=0;
  let end = 0;
  const gemKinds = new Set(gems).size;
  const collect = new Map();

  collect.set(gems[0], 1);

  while (start < gems.length && end < gems.length) {
    if (collect.size === gemKinds) {
      if (end - start < answer[1] - answer[0]) {
        answer = [start + 1, end + 1];
      }

      collect.set(gems[start], collect.get(gems[start])- 1);
      if (!collect.get(gems[start])) {
        collect.delete(gems[start]);
      }
      start++;
    } else {
      end++;
      collect.set(gems[end], 1 + (collect.get(gems[end]) || 0));
    }
  }

  return answer;
}
