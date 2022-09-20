const Index = () => {
  return (
    <>
      <p>test</p>
    </>
  );
};

export default Index;

/*

[비밀 지도 문제]
1. 입력으로 들어오는 정수 두 개를 합집합(|) 연산.
2. 해당 값을 이진수 문자열로 변환
3. 1을 #으로 0을 공백으로 변환.
4. n 길이에 맞춰 이진수 문자열이 짧다면 나머지를 공백으로 채운다.

*/
function solution(n, arr1, arr2) {
    let answer = [];
    for (let i = 0; i < n; i += 1) {
        // 합집합 진행.
        const result = arr1[i] | arr2[i]; 
         // 이진수 문자열로 변환.
        const bit = result.toString(2);
         // 부족한 만큼 빈 문자열을 채움.
        const blankString = ' '.repeat(n - bit.length);
        // 1을 #으로, 0을 공백으로 바꾼다.
        const bitString = bit.replace(/1/gi, '#').replace(/0/gi, ' '); 
        // 빈 문자열과 비트 문자열을 합친다.
        answer.push(blankString + bitString); 
    }

    return answer; // 반환
}

/*
[toString() 함수 예제]
let baseTenInt = 10;
console.log(baseTenInt.toString(2));
 => "1010"이 출력됩니다
 (파라미터 
    2 => 2진법, 
    8 => 8진법,
    10 => 10진법,
    16 => 16진법
)

[repeat() 함수 예제]
str.repeat(count);
=> count는 문자열을 반복할 횟수.

[replace() 함수]
1. 'g' 플래그는 전역 탐색, 즉 전체 문자열을 탐색.
2. 플래그를 i로 지정하면 대소문자를 구분하지 않음.
*/