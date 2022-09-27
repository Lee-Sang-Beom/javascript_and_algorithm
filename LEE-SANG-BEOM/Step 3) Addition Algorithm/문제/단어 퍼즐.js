function solution(str, target){
  const dp = Array.from({length: target.length + 1}).fill(0);
  const strset = new Set(str);

  for(let i=1; i<target.length+1; i++){
    dp[i] = Infinity;
    for(let j=1; j<Math.min(i+1, 6); j++){
      const start = i-j;
      const end = i;

      if(strset.has(target.slice(start,end))){
        dp[i] = Math.min(dp[i], dp[i-j]+1);
      }
    }
  }

  return dp[target.length] === Infinity ? -1 : dp[target.length];
}
console.log(solution(["ba", "na", "n", "a"], "banana"));