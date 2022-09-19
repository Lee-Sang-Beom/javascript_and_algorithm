const Index = () => {
  return (
    <>
      <p>test</p>
    </>
  );
};

export default Index;

/*

[순열, 조합]
1. 자바스크립트에선 직접 구현.
2. 재귀 함수 이용 시 쉽게 만들 수 있음.
3. 재귀로 외우는 것이 직관적이고 편하다.

[n개 중에 r개를 뽑는 경우의 수를 구할 때]
순열: 순서를 고려해 뽑는다

조합: 순서를 고려하지 않는 개념
*/

// 순열 O(n!)
function permutations(arr, n) {
  // 1개만 뽑는다면 그대로 순열을 반환한다. 탈출 조건으로도 사용된다.
  if (n === 1) return arr.map((v) => [v]);
  let result1 = [];

  // 요소를 순환한다
  arr.forEach((fixed, idx, arr) => {
    // 현재 index를 제외한 요소를 추출한다.
    // index번째는 선택된 요소
    const rest = arr.filter((_, index) => index !== idx);
    // 선택된 요소를 제외하고 재귀 호출한다.
    const perms = permutations(rest, n - 1);
    // 선택된 요소와 재귀 호출을 통해 구한 순열을 합쳐준다.
    const combine = perms.map((v) => [fixed, ...v]);
    // 결과 값을 추가한다.
    result1.push(...combine);
  });

  // 결과 반환
  return result1;
}

console.log(permutations([1,2,3,4],3)); //4P3

// 조합 O(2^n) 

function combinations(arr, n) {
  // 1개만 뽑는다면 그대로 조합을 반환한다. 탈출 조건으로도 사용된다.
  if (n === 1) return arr.map((v) => [v]);
  const result2 = [];

  // 요소를 순환한다
  arr.forEach((fixed, idx, arr) => {
    // 현재 index 이후 요소를 추출한다.
    // index번째는 선택된 요소
    const rest = arr.slice(idx + 1);
    // 선택된 요소 이전 요소들을 제외하고 재귀 호출한다.
    const combis = combinations(rest, n - 1);
    // 선택된 요소와 재귀 호출을 통해 구한 조합을 합쳐준다.
    const combine = combis.map((v) => [fixed, ...v]);
    // 결과 값을 추가한다.
    result2.push(...combine);
  });

  // 결과 반화
  return result2;
}

console.log(combinations([1,2,3,4],3)); // 4C3

// 두 개 뽑아서 더하기 문제

function solution(numbers) {
    // 1. 조합을 구한다. n 개중 2개
    // 2. 조합의 합을 구한다.
    // 3. 중복을 제거한다.
    // 4. 오름차순 정렬한다.
    function solution(numbers) {
        const answer = [];
        for (let i = 0; i < numbers.length; i++) {
          for (let j = i + 1; j < numbers.length; j++) {
            answer.push(numbers[i] + numbers[j]);
          }
        }
      
        return ([...new Set(answer)].sort((a,b)=>a-b));
        // Set() 함수는 answer 배열의 중복데이터를 제거.
    }
  }