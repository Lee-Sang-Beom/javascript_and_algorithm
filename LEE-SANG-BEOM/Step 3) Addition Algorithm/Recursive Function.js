// 재귀 구현 시 편한 알고리즘 : Union-Find, DFS, Backtracking

// 재귀 예시
{
    function recursion(a){
        // run time error 발생
        return recursion(a+1);
    }

    // 탈출 코드 추가
    function recursion(a){
        if(a>10){
            return a;
        }
        return recursion(a+1);
    }

}

// 피보나치 수열
{
    function fibo(x){
        if (x<=2){
            return 1;
        }
        
        return fibo(x-1)+fibo(x-2);
    }

    console.log(fibo(7));

}