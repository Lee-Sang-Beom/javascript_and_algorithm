// 스택을 이용한 올바른 괄호 문제 풀기
const Index = () => {
  console.log(solution("()"));
};

export default Index;

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
  // if (stack.length === 0) {
  //   return true;
  // } else {
  //   return false;
  // }
  return stack.length === 0;
}
