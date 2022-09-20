function permutation(arr, n){
    if (n===1){
        return arr.map((v)=>[v]);
    }

    let result = [];

    arr.forEach((currentValue, idx, arr) => {

        const rest = arr.filter((_,index)=>{
            return idx !== index
        });

        const perms = permutation(rest, n-1);
        const combine = perms.map((v)=>[currentValue, ...v]);
        result.push(...combine);
    })

    return result;
}

console.log(permutation([1,2,3],2));