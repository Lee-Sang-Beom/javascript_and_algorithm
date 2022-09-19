function combinations(arr,n){
    if (n==1) {
        return arr.map( v => [v] );
    }

    const result = [];

    arr.forEach((currentValue, idx, arr) => {
        // 배열로 부터 특정 범위를 복사한 값들을 담고 있는 새로운 배열을 만드는데 사용
        // arr.slice(idx + 1) => idx+1위치부터 끝까지 새로운 배열을 만들어 반환
        // 순열과 이부분만 차이남

        /*
            순열은
            arr.filter((_,index) =>{
                return index !== idx
            })
        */
        const rest = arr.slice(idx+1);
        const combis = combinations(rest,n-1);
        const combine = combis.map((v)=>[currentValue, ...v]);
        result.push(...combine);
    })

    return result;
}

console.log(combinations([1,2,3], 3));