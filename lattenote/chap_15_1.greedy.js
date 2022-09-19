const Index = () => {
  return (
    <>
      <p>test</p>
    </>
  );
};

export default Index;

/*
  [그리디]
  : 매 선택에서 지금 이순간 가장 최적인 다븡ㄹ 선택하는 알고리즘.
    (최적해를 보장하지 않음.)

  [그리디 알고리즘의 특징]
  1. 최적해 구하는 알고리즘보다 빠른 경우가 많음.
  2. 크루스칼, 다익스트라 알고리즘 등에 사용된다.
  3. 직관적인 문제 풀이에 적합. 입력 값이 클 때

예제) 동전 반환 문제

  */

/* 14-3장

N이 백만 자리이면 O(n), O(n log n) 
위의 복잡도보다 더 커지면 효율성에서 문제 생김.

입출력 예를 주의 깊게 보면서 분석함.

=> 큰 값이 나오면 이전 값 중 더 작은 값은 전부 다 삭제된다.
즉, stack의 바닥에서 부터 탑은 큰 수 부터 작은 수로 나열이 되어야 한다.

*/

function solution(number, k){
    const stack = [];
    let count = 0;

    for (const item of number){
        while(count < k && stack[stack.length - 1] < item){
            stack.pop();
            count += 1;
        }
        stack.push(item);
    }
    // "9876543"
    
    while (count < k){
        stack.pop();
        count +=1;
    }
    return stack.join("");
}

const number = "1924";
const k = 2;

console.log(solution(number,k));