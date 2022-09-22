const Index = () => {
  return (
    <>
      <p>test</p>
    </>
  );
};

export default Index;

/*

[스코프]
1. 유효 범위
2. 변수가 어느 범위까지 참조되는지

- Global Scope

- Local Scope

* var 사용 시 문제점.
지역 변수로 선언한 a가 호이스팅 되어 
상단의 전역 변수인 a의 값도 영향을 끼친다.

var => 함수 수준
const, let => 블록 수준

[클로저]
1. 함수가 선언된 환경의 스코프를 기억하여 
함수가 스코프 밖에서 실행될 때에도 기억한 스코프에
접근할 수 있게 만드는 문법.

*/

function makeGreeting(name) {
  const greeting = "Hello, ";

  return function () {
    console.log(greeting + name);
  };
}
const world = makeGreeting("World!");
const choco = makeGreeting("bestchoco");

world();
choco();
/*
[실행 결과]
Hello, World!
Hello, bestchoco

=> 실행 시점에도 greeting 변수가 살아있음.
*/

/*

[은닉화]
1. 클로저를 이용하여 내부 변수와 함수를 숨길 수 있음.

*/
function Counter() {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function () {
      changeBy(1);
    },
    decrement: function () {
      changeBy(-1);
    },
    value: function () {
      return privateCounter;
    },
  };
}

const counter = Counter();

console.log(counter.value());
counter.increment();
counter.increment();
console.log(counter.value());
counter.decrement();
console.log(counter.value());

/*
[실행 결과]
0
2
1
*/

/*
[클로저를 잘 알아야하는 이유]
1. 알기 함든 버그를 잘 수정하기 위해서.
*/

// 예제
function counting() {
  let i = 0;
  for (i = 0; i < 5; i += 1) {
    setTimeout(function () {
      console.log("예제 1", i);
    }, i * 100);
  }
}

counting();

// 결과: 5 5 5 5 5

// 해결방법 1 : 즉시 실행 함수 (IIFE)
/*
Immediately Invoked Function Expression
*/


function counting2() {
  let i = 0;
  for (i = 0; i < 5; i += 1) {
    (function (number) {
      setTimeout(function () {
        console.log("예제 2", number);
      }, number * 100);
    })(i);
  }
}
counting2();


// 해결방법 2 : let 사용. (매 루프마다 클로저 생성된다.)
function counting3() {
  for (let i = 0; i < 5; i += 1) {
    setTimeout(function () {
      console.log("예제 3", i);
    }, i * 100);
  }
}

counting3();