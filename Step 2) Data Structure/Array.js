// 배열 생성
const arr_1 = [1,2,3];
const arr_2 = Array(10).fill(0); // Array 요소 10개, 각 요소의 값은 0
const arr_3 = Array.from({length: 100}, (_, i)=>i); // 유사배열객체 : length속성을 가지고, 인덱싱 된 요소를 가진 객체

// 배열 요소 추가, 삭제
arr_1.push(4); // O(1)
console.log(arr_1); // [1,2,3,4]

arr_1.push(5,6); // O(1)
console.log(arr_1); // [ 1, 2, 3, 4, 5, 6 ]

// 1번째 인자 : 배열의 변경을 시작할 인덱스
// 2번째 인자 : 1번째 인자로 전달한 위치에서, delete할 요소의 수
// 3번째 인자 ; 추가할 값
arr_1.splice(3,0,128); // O(n)
console.log(arr_1); // [ 1, 2, 3, 128, 4, 5, 6 ]

// 3번째 인자로 아무 요소도 넣지 않으면, 제거만 함
arr_1.splice(3,1); // O(n)
console.log(arr_1); // [ 1, 2, 3, 4, 5, 6 ]