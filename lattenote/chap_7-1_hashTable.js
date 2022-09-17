const Index = () => {
    return (
      <>
        <p>test</p>
      </>
    );
  };
  
  export default Index;
/*
  [해시 테이블]
  정의 : 키와 값을 받아 키를 해싱하여 나온 index에 값을 저장하는 선형 자료구조

  [해시 함수]
  정의 : 입력받은 값을 특정 범위 내 숫자로 변경하는 함수

  [해쉬 충돌 발생 시 해결법]
  
  - 선형 탐사법 (선형 시간 걸릴 수 있다.)
  1. 옆으로 한 칸 이동한다.

  - 제곱 탐사법
  1. 충돌이 발생한 횟수의 제곱만큼 옆으로 이동.

  - 이중 해싱
  1. 다른 해시 함수를 이용 (해시 함수 1, 해시 함수 2로 나누어..)

  - 분리 연결법
  1. 버킷의 값을 연결 리스트로 사용하여 충돌이 발생하면 리스트에 값을 추가한다.
  단점 1. 하나의 버킷에 무한정 값이 들어갈 수 있다.

  [해시 테이블 사용 예]
  1. 학생 정보
  2. 빠르게 값을 찾아야 하는 경우. (O(1))
*/

// 배열로 구현 시

// 객체로 구현 시

// const table = {};
// table["key"] = 100;
// table["key2"] = "hello";
// console.log(table["key"]);
// delete table["key"];

// Map 함수 사용 시 (복잡한 타입도 사용 가능.) 
// 여러 편한 메소드 사용 가능, 순회 편하게 가능.

// const table = new Map();
// table.set("key",100);
// table.set("key2", "Hello");
// console.log(table.get("key"));
// const object = {a:1};
// table.set(object, "A1");
// console.log(table.get(object));
// table.delete(object);
// console.log(table.get(object));
// console.log(table.keys());
// console.log(table.values());
// table.clear();
// console.log(table.values());

// Set 함수 사용 시
// 중복된 내용 제거 시 사용.

const table = new Set();
table.add("key");
table.add("key2");
console.log(table.has("key"));
console.log(table.has("key3"));
table.delete("key2");
console.log(table.has("key2"));
table.add("key3");
console.log(table.size);
table.clear();
console.log(table.size);