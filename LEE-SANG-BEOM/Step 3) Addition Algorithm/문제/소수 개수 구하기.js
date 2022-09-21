function isPrime(num) {
  // 0, 1은 소수가 아님.
  const prime = [false, false, ...new Array(num - 1).fill(true)];
  let count = 0;
  const result = [];

  for (let i = 2; i * i <= num; i++) {
    for (let j = i * 2; j <= num; j += i) {
      if (prime[j]) {
        prime[j] = false;
      }
    }
  }

  for (let i = 0; i < prime.length; i++) {
    if (prime[i]) {
      count++;
      result.push(i);
    }
  }

//   for (let bool of prime) {
//     if (bool) {
//       count++;
//     }
//   } 

  console.log(count, result);
}

isPrime(20);
