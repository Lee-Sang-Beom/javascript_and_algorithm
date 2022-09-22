const Index = () => {
  return (
    <>
      <p>test</p>
    </>
  );
};

export default Index;

/*

[함수형 프로그래밍]

[패러다임]
1. 무엇을 해야 할지가 아닌 "무엇을 해서는 안 되는가?"
2. 4가지 요소를 다룸.
=> 프로그램은 "순차", "분기", "반복", "참조"로 구성된다.

[객체지향과 프로토타입]
1. 객체지향: 객체 간 통신을 통해 프로그램 동작
2. 함수형: 데이터를 함수를 이용하여 새로운 데이터를 만들어나간다. (데이터 파이프라인 형태)

/*

[함수형 패러다임]
1. 함수형은 함수가 최소 단위.
(객체지향 추상화의 최소 단위 : 객체)

2. 재사용성이 높다. (함수 단위로 나누어 진다.)
3. 불변성 지향 
=> 동작 예측 쉽다.
=> 사이드 이펙트 방지(동시성 문제 해결).

4. 함수형은 변수 할당에 부과되는 규율.
(객체지향은 제어 흐름의 간접적인 전화에 부과되는 규율.)

*/


// 퀴즈 : "12345" -> 15 (숫자 모두 합해서 출력하는 프로그램 작성)

// 객체지향 프로그래밍으로.
/*
function StringNumber(string){
    this.string = string;
}
StringNumber.prototype.calculate = function(){
// prototype 설명: https://youtu.be/wUgmzvExL_E
    const stringNumber ="12345";
    this.sum = 0;
    for (let i = 0; i < stringNumber.length; i+=1){
        this.sum += stringNumber[i] - "0";
    }
};

const stringNumber = new StringNumber("12345");
stringNumber.calculate();
console.log(stringNumber.sum);
*/

// 절차지향 프로그래밍으로.
/*
const stringNumber = "12345";
let sum = 0;
for (let i = 0; i < stringNumber.length; i+= 1){
    sum += stringNumber[i] - "0";
}
console.log(sum);
*/
// 함수형 프로그래밍으로.
const stringNumber = "12345";
console.log(
    stringNumber
    .split('')
    .map(x=> parseInt(x))
    .reduce((x,y)=> x + y, 0)
);

/*
[함수형 프로그래밍의 장점]
1. 상태가 없기 때문에 사이드 이펙트가 없다.
2. 재사용성이 높다.
3. 코드가 짧고 간결하다.

[함수형 프로그래밍의 단점]
1. 메모리를 많이 먹는다.
2. 함수를 잘게 쪼개야 한다.
3. 많은 숙련도를 요구한다.

[선언형 프로그래밍]
1. 명령형 프로그래밍: "문제를 어떻게 해결해야 하는지" 컴퓨터에게 명령을 내리는 방법
2. 선언형 프로그래밍: "무엇을 해결해야 할지"에 집중하고 해결 방법은 컴퓨터에게 위임하는 방법

[멀티 패러다임]
1. JavaScript는 멀티 패러다임이 가능.
=> 객체지향과 함수형으로 나눌 필요 없이 둘 다 쓰자.

*/