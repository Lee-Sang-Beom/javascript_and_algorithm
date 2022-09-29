function combinations(arr, n){
    if (n===1){
        return arr.map((v)=>[v]);
    }

    const result = [];
    arr.forEach((currentValue, idx, arr) => {
        const rest = arr.slice(idx+1);
        const combis = combinations(rest, n-1);
        const combine = combis.map((item)=>[currentValue, ...item]);
        result.push(...combine);
    });

    return result;
}

function solution(numbers){
    const array = combinations(numbers,2);
    const combine_sum = array.map((item) => item[1]+item[0]);
    const sumSet = new Set(combine_sum);

    return [...sumSet].sort((a,b)=>a-b);
}