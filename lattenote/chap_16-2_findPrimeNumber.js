function solution(num) {
  const result = []; // 소수를 담기 위한 배열
  const prime = [false, false, ...Array(num - 1).fill(true)];

  // 에리토스테네스의 체 알고리즘
  for (let i = 2; i * i <= num; i += 1) {
    if (prime[i]) {
      for (let j = 2; j * i <= num; j += 1) {
        prime[j * i] = false;
      }
    }
  }

  for (let k = 0; k <= num; k += 1) {
    //console.log("prime[k]",prime[k])
    if (prime[k]) {
      result.push(k);
    }
  }
  //console.log(result.length);
  return result.length;
}
