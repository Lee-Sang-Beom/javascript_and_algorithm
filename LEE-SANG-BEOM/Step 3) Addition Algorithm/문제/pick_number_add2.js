function combinations(arr, n){
    if (n===1){
        return arr.map((v)=>[v]);
    }
    
    const result = [];
    arr.forEach((currentValue, idx, arr) => {
        /*
            순열일 경우, arr.filter((_,index) => {return idx !== index});
        */
        const rest = arr.slice(idx+1);
        const combis = combinations(rest, n-1);
        const combine = combis.map((v)=>[currentValue, ...v]);
        result.push(...combine);
    })
    
    return result;
}

function solution(numbers) {
    // 1. 조합을 구한다.
    const array = combinations(numbers, 2);

    // 2. 조합의 합을 구한다.
    const combine_sum = array.map((sum) => sum[0]+sum[1]);
   
    // 3. 중복 제거
    const set = new Set(combine_sum);

    // 4. 오름차순 : a-b
    // set은 키가없는 객체이고, 이를 오름차순하기 위해서는
    //   (1) 객체를 요소하나하나로 나열
    //   (2) 이걸 배열 안에 집어넣어서 배열로 만들고 sort함수 적용
    const result= [...set].sort((a,b)=>a-b);
    return result;
}

