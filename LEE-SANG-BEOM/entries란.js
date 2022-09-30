const maxInfoMap = new Map([['name','kim'],['age',25], ['major','영문학']]);
const maxInfoSet = new Set([['name','kim'],['age',25], ['major','영문학']]);

// console.log(maxInfoMap);
// console.log(maxInfoMap.entries());

// console.log([...maxInfoMap]);
// console.log([...maxInfoMap.entries()]);

console.log(maxInfoSet);
// console.log(maxInfoSet.entries());

// console.log([...maxInfoSet]);
// console.log([...maxInfoSet.entries()]);

for (const [key, value] of maxInfoSet){
    console.log(key, value);
}