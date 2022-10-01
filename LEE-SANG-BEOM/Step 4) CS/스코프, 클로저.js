// 스코프: 유효 범위라고 부르며, 변수가 어느 범위까지 참조 가능한지를 뜻함

{
    var a = 5;
    {
        // 호이스팅되어, 변수선언이 상단으로 올라가버림
        var a=10;
        console.log(a); // 10
    }

    // var: 함수 수준의 스코프 -> 개발자가 예상치 못한 오류가 발생할 우려
    // let, const: 블록 수준의 스코프
    console.log(a); // 10
}

// 클로저: 함수가 선언된 환경의 스코프를 기억해, 
// 함수가 스코프 밖에서 실행될때도, 
// 기억한 스코프에 접근할 수 있도록 만드는 문법
{
    function makeGreeting(name){
        const greeting = 'hello, ';
        return function(){
            console.log(greeting + name);
        }
    }

    const world = makeGreeting('world');

    world();
}


// 클로저 장점: 은닉화 - 클로저를 이용해 내부변수와 함수를 숨길수있음
// 클로저 잘 알아야하는 이유 : 알기힘든 버그를 잘 수정하도록 하기 위해
{
    function counting(){
        let i=0;
        for (i=0;i<5;i++){
            setTimeout(function(){
                console.log(i) // 5 5 5 5 5 -> settimeout 대기시간 후, 콜백함수가 실행되는 시점에는 이미 루프가 종료되어 i=5가됨
            }, i*100);
        }
    }

    function counting2(){
        for (let i=0;i<5;i++){ // 매번 let사용: 블록수준 스코프라, 매 루프마다 클로저가 새로 생성된다. 
            setTimeout(function(){
                console.log(i) 
            }, i*100);
        }
    }
    

    counting2();
}