const Index = () => {
  return (
    <>
      <p>test</p>
    </>
  );
};

export default Index;
/*
[소수]
: 1 또는 자기 자신만을 약수로 가지는 수를 의미.

[소수 구하는 효율적인 방법]
1. 2부터 N-1까지 루프 돌며 나눠보기. O(n)

(다른 방법에 비해 느리다.)

function is_prime(num){
  for (let i = 2; i < num; i += 1){
    if (num % i == 0){
      return false;
    }
  }
  return true;
}

2. (효율성 개선) 그 어떤 소수도 N의 제곱근보다 큰 수로 나눠지지 않는다는 점 이용.
O(루트 n)

function is_prime(num){
  for (let i = 2; i * i <= num; i += 1){
    if (num % i == 0){
      return false;
    }
  }
  return true;
}

3. 에라토스테네스의 체 - 외워두기!
O(nloglogn)(가장 효율적)

*/
function get_primes(num) {
  const result = []; // 소수를 담기 위한 배열
  const prime = [false, false, ...Array(num - 1).fill(true)]; // 0과 1을 제외한 나머지 숫자 모두를 소수의 후보군으로 등록
  console.log("test log",prime);
  // 에리토스테네스의 체 알고리즘
  for (let i = 2; i * i <= num; i += 1) {
    if (prime[i]) {
      for (let j = 2; j * i <= num; j += 1) {
        prime[j * i] = false;
      }
    }
  }

  // 소수 출력
  for (let k = 0; k <= num; k += 1) {
    if (prime[k]) {
      result.push(k);
    }
  }

  return result;
}

console.log(get_primes(5)); // [ 2, 3, 5]
console.log(get_primes(11)); // [ 2, 3, 5, 7, 11 ]