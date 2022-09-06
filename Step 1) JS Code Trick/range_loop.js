let sum=0;

for (let i=5; i<10; i++){
    console.log(i); // 5~9
    sum+=i;
}

//35
console.log(sum);

/*
 - Array.from()은 문자열 등 유사 배열(Array-like) 객체나 이터러블한 객체를 배열로 만들어주는 메소드 (ES6)
  * 유사 객체? 키가 인덱스 값으로 되어있고 길이를 나타내는 length 속성을 갖는 객체
 
 - Array.from([1, 2, 3], x => x + x); [1,2,3]의 각 원소를 x라고 할 때, 반환되는 값은 이들을 1번씩 더한 값
 - output : Array [2, 4, 6]
 - 두 번째 인자는 생성한 배열의 모든 원소에 대해 수행할 맵핑 함수
*/
const sum_2 = Array
.from(new Array(5), (_, k) => k + 5)
.reduce((prev, curr)=>{
    return prev+curr // init prev:0 에 배열 요소를 돌면서 추가 (curr)
},0)

console.log(sum_2);