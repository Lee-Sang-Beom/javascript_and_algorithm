/*

[ Set ]

* set 객체는 중복되지 않는 유일한 값들의 집합이다.
* set 객체는 다음과 같은 특징을 가진다.
 - 동일한 값을 중복하여 포함할수 없다
 - 요소 순서에 의미가 없다
 - 인덱스로 요소에 접근할 수 없다.
 - 이러한 set 객체는 수학적 집합을 구현하기위한 자료구조이다.
 - 그래서 set을 통해 교집합, 합집합, 차집합, 여집합 등을 구현할 수 있다.

* 요소 개수는 Set.prototype.size 프로퍼티 사용
* 요소 추가는 Set.prototype.add 메서드 사용
* 요소 존재여부 확인은 Set.prototype.has 메서드 사용
* 요소 삭제는 Set.prototype.delete 메서드 사용
* 요소 일괄삭제는 Set.prototype.clear 메서드 사용
* 요소 순회는 Set.prototype.forEach 메서드 사용
  - 전달 인자로 콜백함수를 보내준다. 이 때 콜백함수는 3개의 인수를 전달받는다. (현재 순회중인 요소값, 현재 순회중인 요소값, 현재 순회중인 set 객체 자체)
  - 첫번째와 두번째 인수가 같은 이유는 Array.prototype.forEach 메서드와 인터페이스를 통일하기 위해서이다. 
    (Array.prototype.forEach는 두번째 인수로 인덱스를 전달받지만, set은 순서에 의미가없기때문에 인덱스를 받지않는다!) 

* set 객체는 이터러블 객체 : for of, 스프레드 연산자 등 사용가능

*/

const set = new Set(); // Set(0) {}
const set1 = new Set([1, 2, 3, 3]); // Set(3) {1, 2, 3}
const set2 = new Set('hello'); // Set(4) {"h", "e", "l", "o"}

const set3 = new Set([1, 2, 3]); // Set 객체는 Set.prototype의 Symbol.iterator 메서드를 상속받는 이터러블이다.
console.log(Symbol.iterator in set3); // true

// 이터러블인 Set 객체는 for...of 문으로 순회할 수 있다.
for (const value of set3) {
  console.log(value); // 1 2 3
}

// 이터러블인 Set 객체는 스프레드 문법의 대상
console.log([...set3]); // [1, 2, 3]

const names = ['Lee', 'Kim', 'Park', 'Lee', 'Kim'];
const uniqueNameArray= Array.from(new Set(names));
console.log(uniqueNameArray);