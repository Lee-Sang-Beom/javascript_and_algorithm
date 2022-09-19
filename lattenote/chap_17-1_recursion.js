const Index = () => {
  return (
    <>
      <p>test</p>
    </>
  );
};

export default Index;

/*

[재귀 함수]
1. 재귀 함수: 자기 자신을 호출하는 함수
2. 재귀 호출: 자기 자신을 호출하는 것.
3. 함수 호출 - Call stack에 쌓임 - 스택 자료구조와 유사하게 동작.
4. 함수형 프로그래밍 - 루프 구현의 경우 재귀로 할 때가 많음.
5. 잘못 작성 시 무한 루프에 빠질 수 있음.

[자바스크립트에서의 재귀 함수]
1. 콜 스택 제한 있음 (엔진 및 브라우저마다 다름.)
2. 꼬리 재귀가 제공되지 않음
3. 성능이 좋지 않음.

[재귀를 알아야 하는 이유]
:쉽게 풀릴 수 있음 (더 효율적이진 않음.)

[재귀로 구현 시 편한 알고리즘]
1. Union-Find
2. DFS
3. BackTracking
4. 더 빠른 성능 보단 빨리 푸는게 중요하기 때문에 재귀 방식을 추천하진 않음.

*/

// 재귀 호출

// 무한 루프 방지 위해 탈출 코드 작성 필요.
function recursion(a){
    if(a>10){
        return a;
    }
    return recursion(a+1);
}

console.log("recursion 예제 결과 값: ",recursion(5)); // 결과 : 11

// 피보나치 수열 (04:00 해설)
// 앞 두항의 합이 뒤 항의 값이 되는 수열.

function fibonacci(x){
    if (x <= 2){
        return 1;
    }
    return fibonacci(x - 1) + fibonacci(x-2);
}

console.log("피보나치 수열 결과 값: ",fibonacci(7));

// 변수 없는 합병 정렬 구현 (함수형 프로그래밍 방식)

// 결합
const merge = (a,b) => {
    if (a.length === 0) return b;
    else if (b.length === 0) return a;
    else if (a[0] < b[0]) return [a[0], ...merge(a.slice(1),b)];
    else return [b[0], ...merge(a, b.slice(1))];
}

// 분해
const mergesort = (arr) => {
    if (arr.length<2) return arr;
    else{
        const mid = Math.floor(arr.length /2);
        return merge(mergesort(arr.slice(0,mid)), mergesort(arr.slice(mid)))
    }
}
console.log("mergesort 결과 : ",mergesort([21,10,12,20,25,13,15,22]));

/* MDN DOCS [arr.slice()]

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

*/