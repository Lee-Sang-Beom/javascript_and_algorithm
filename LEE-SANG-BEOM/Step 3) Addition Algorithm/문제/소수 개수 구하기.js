function isPrime(num){
    const prime = [false, false, ...new Array(num-1).fill(true)];
    let count = 0;
    
    for (let i = 2; i*i <= num; i++){
        if(prime[i]){
            for (let j = i*2; j <= num; j += i){
                prime[j] = false;
            }
        }
    }

    for (let bool of prime){
        if(bool){
            count++;
        }
    } 
    
    return count;
}

function solution(n) {
    return isPrime(n);
}

solution(10);