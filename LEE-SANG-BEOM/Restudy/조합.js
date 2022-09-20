function combination(arr, n){
    if(n===1) return arr.map((v)=>[v]);
    const result = [];

    arr.forEach((currentValue, idx, arr) => {
        const rest = arr.slice(idx+1);
        const combis = combination(rest, n-1);
        const combine = combis.map((v)=>[currentValue, ...v]);
        result.push(...combine);
    })

    return result;
}

console.log(combination([1,2,3], 2));
