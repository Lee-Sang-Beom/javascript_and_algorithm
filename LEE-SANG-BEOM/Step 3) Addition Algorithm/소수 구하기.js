// 소수구하기 1 : 2부터 n-1까지 루프를 돌며 나눠보기(%)
{
    function isPrime(num){
        for(let i=2; i<num; i++){
            if(num%i==0){
                return false;
            }
        }
         
        return true;
    }
}

// 소수구하기 2: 그 어떤 소수도 n의 제곱근보다 큰 수로 나눠지지 않는다.
// sqrt(17) = 17%2, 17%3, 17%4
{
    function isPrime(num){
        // n의 제곱근보다 큰 수로 나뉘지 않는다.
        // 즉 i*i가 n보다 크지않은 경우는 항상 i가 n의 제곱근보다 크지않다는 소리임
        for(let i=2; i*i <= num; i++){ 
            if(num%i==0){
                return false;
            }
        }
         
        return true;
    }
}

// 에라토스테네스의 체
// 2의 배수, 3의 배수, 5의 배수인 값, ... 소수값의 배수 모두 체크
// 2~54범위면 54^1/2를 넘지않는 정수인 7까지만 확인하면 됨.

{
    function isPrime(num){
        
        /*
        스프레드 문법 미사용 시, 결과는 아래와 같음
        [
            false,
            false,
            [
              true, true, true,
              true, true, true,
              true, true, true
            ]
        ]
        */
          
        // 0~num(ex:10)을 모두포함하는 총 num+1개 배열
        const prime = [false, false, ...Array(num-1).fill(true)];
        console.log(prime)
        
        for (let i = 2; i*i <= num; i++){
            if (prime[i] === true){
                // 배수처리 하면서 계속 그 값을 소수가 아닌 것으로 fasle처리 할거임
                // 초기값을 i의 2배로주고, i씩 계속 더해나가면 된다 (예시 : i=3, j=6,9,...)
                for (let j = i*2; j <= num; j += i) {
                    // j의 초기값 i*2는 i가 최초발견된 경우 소수이고, 
                    // 그 배수가 소수가 아닌것으로 판명하기에, i를 제외하고 다음거부터 보기 위해 i*2로 초기값을 지정
                    prime[j] = false;
                }
            }
        }

        let result = [];
        for (let i=0; i < num; i++){
            if(prime[i] === true){
                result.push(i);
            }
        }

        return result;
       
    }

    console.log(isPrime(10));
}