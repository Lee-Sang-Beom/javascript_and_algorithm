const Index = () => {
  return (
    <>
      <p>test</p>
    </>
  );
};

export default Index;

/*

[단어 퍼즐 문제]
- 주어진 문장을 완성하기 위해 사용해야 하는 단어조각 개수의 최솟값을 return 하도록 solution 함수를 완성
- 만약 주어진 문장을 완성하는 것이 불가능하면 -1을 return.

>> 순열 사용 시 시간복잡도 문제.
>> 백트래킹으로 가지치기 진행 시 제한시간 통과 문제.

[동적 계획법인지 확인하기.]
1. 필요한 단어 개수의 최소값 구하기
=> 가장 작은 문제도 단어 갯수로 정의.

예)
단어 "b"를 만들 수 있는 단어 개수의 최솟값은?

그 다음 큰 문제

단어 "ba"를 만들 수 있는 단어 개수의 최솟값은?
단어 "ban"를 만들 수 있는 단어 개수의 최솟값은?
단어 "bana..."를 만들 수 있는 단어 개수의 최솟값은?

=> 가장 작은 문제를 정의했다면 작은 문제를 통해 큰 문제의 답을 알 수 있는지 확인.


*/

// [구현] 한 번에 이해 못함.

function solution(strs, t){
    const dp = Array.from({length: t.length+1}, () => 0);
    const strsSet = new Set(strs); // 문자열 검사 빠르게 하기 위한 용도.

    for (let i = 1; i <t.length+1; i+=1){
        dp[i] = Infinity; // 해당 문자열의 최솟값은 무한으로 설정.
        // 단어 조각은 5 이하기 때문에 마지막까지 자를 필요는 없음.
        // Math.min() 함수는 주어진 숫자들 중 가장 작은 값을 반환.
        for (let j = 1; j < Math.min(i+1,6); j+=1){
            const start = i - j;
            const end = i;
            // 단어 조각 존재 시
            if (strsSet.has(t.slice(start,end))){
                // 이전 조합 더하여 최솟값인지 체크 후 대입.
                dp[i] = Math.min(dp[i], dp[i-j] + 1);
            }
        }
    }
    return dp[dp.length - 1] === Infinity ? -1 : dp[dp.length - 1];
}

const strs = ["ba","na","n","a"];
const t = "banana";

console.log(solution(strs,t));
