function solution(str, target) {
  // 편의를 위해 length : t.length+1
  const dp = Array.from({ length: target.length + 1 }).fill(0);
  const strSet = new Set(str);

  // for문 if에서, target의 마지막 문자까지 확인해야 하니, target.length+1
  for (let i = 1; i < target.length + 1; i++) {
    dp[i] = Infinity;

    // 문자열을 자르면서 단어 조각을 찾기 위해 루프를 돈다.
    // 단어 조각은 5 이하기 때문에 마지막까지 자를 필요는 없다.
    for (let j = 1; j<Math.min(i+1,6); j++){
        const start = i-j;
        const end = i;

        // start~end-1까지의 target인덱스를 포함하는가? = 단어 조각이 있다?
        if (strSet.has(target.slice(start,end))){
            // 이전 조합과 더해서 최솟값인지 체크 후 대입한다.
            dp[i] = Math.min(dp[i], dp[i-j] + 1);
        }
    }
  }

  // dp길이는 target길이에 +1을 해줬으니, 마지막 원소에 접근하려면 dp.length-1
  // 혹은 target.length
  return dp[target.length] === Infinity ? -1 : dp[target.length];
}

console.log(solution(["ba", "na", "n", "a"], "banana"));
