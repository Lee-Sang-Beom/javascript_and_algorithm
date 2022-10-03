/*
 - 객체지향의 객체: 현실에 있는 것을 객체로 추상화한 것
 - 추상화: 공통의 속성이나 특정 기능을 묶어 이름을 붙이는 것
 - 객체 지향적 관점에서 클래스를 정의하는 것을 바로 추상화라고 정의 내릴 수 있다.

 - 객체 지향이란: 객체위주로 설계하고 프로그래밍하는 패러다임
 - 객체지향 언어에서는 추상화의 단위는 객체이다.
 - 각 객체는 메시지를 주고받으며 상호작용할 수 있다.
 - 자바스크립트는 프로토타입을 통해 객체지향을 표현한다.
*/

// 자바스크립트의 객체는 클래스기반 언어처럼 속성과 메소드를 정의할 수 있다
{
    const person = {
        name:'lee sang beom',
        move: function(dest){
            console.log(`목적지 : ${dest}`);
        }
    }
}

/*
 - 자바스크립트 객체생성방법
  1. 객체 리터럴
  2. Object 생성자 함수
  3. 생성자 함수
*/

{
    // 객체 리터럴
    const person1 = {
        name:'lee sang beom',
        move: function(dest){
            console.log(`목적지 : ${dest}`);
        }
    }

    // object 생성자 함수
    const person2 = new Object();
    person1.name="lee sang beom";
    person1.move = function(dest){
        console.log(`목적지 : ${dest}`);
    }

    // 생성자 함수
    function Person3(name, company, move){
        this.name= name;
        this.company = company;
        this.move =   function(dest){
            console.log(`목적지 : ${dest}`);
        }
    }
}

/*
 프로토 타입이 필요한 이유/
  - 프로토타입: 기존의 객체를 복사해 새로운 객체를 생성하는 방식 (기존 객체를 효율적으로 사용할 수 있는 방법: 메모리낭비방지 효과)
  - 프로토타입 사용 시 상위 객체를 참조할 수 있고, 객체를 이용해 새로운 객체를 추가적으로 만들어나갈 수 있음
*/
{
    function Person(name, company){
        this.name= name;
        this.company = company;
        Person.prototype.getName = function(){
            return this.name;
        };

        Person.prototype.setName= function(name){
            this.name = name;
        }
    }

    const lee = new Person("이상범", "없음");
    console.log(lee);

    // 객체들은 각자 __proto__라는 객체를 내부적으로 가진다.
    // 이 내부에서 상위 객체를 link함
    console.log(Person.__proto__);
    console.log(lee.__proto__);

}

/*
 - 프로토타입 사용
  1. 상속 흉내내기 : 상위 객체에서 하위객체를 좀 더 잘 만드는 방법
   - 부모 객체를 이용해 프로토타입 함수 정의

  2. Object.create() : 기존 객체를 재활용할 수 있다.
*/
{
    const lee= {
        name: '이상범',
        getName : function(){
            return this.name;
        }
    }

    const kim = Object.create(lee); // lee를 복제해 kim을 만듬: kim의 상위객체는 lee가 됨
    kim.name="김상";

    console.log(lee.getName());
    console.log(kim.getName());

    console.log(lee.__proto__);
    console.log(kim.__proto__);
}