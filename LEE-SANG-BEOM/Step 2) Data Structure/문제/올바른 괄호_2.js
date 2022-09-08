function solution(s) {
  const stack = [];

  for (const i of s) {
    if (i === "(") {
      stack.push(i);
    } else {
      if (stack.length === 0) {
        return false;
      } else {
        stack.pop();
      }
    }
  }

  // return stack.length === 0과 같은 뜻
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
}
