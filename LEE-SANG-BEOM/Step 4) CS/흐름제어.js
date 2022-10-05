/*
 흐름제어?

 개념) 순차적으로 실행되는 명령을 조건에 따라 다른 명령을 실행할 수 있도록 하여,
       프로그램을 좀 더 동적이고 대화식으로 만들 수 있도록 하는 것 

    - 기본적으로 변수 유효범위를 결정하는 단위인 블록문을 사용
    - 조건이나 반복을 통해 상태를 제어하며, 방식은 2가지가 있음

 1. control flow: goto, if / else if / else, switch/case, for/while, 예외처리
   - 일반적 조건/반복문을 사용함으로써 control flow를 구현합니다.

 2. data flow: stateless, recursion, pipe
   - 함수형 프로그래밍으로 구현


조건문: 조건이 맞을때만 실행되는 문장(statements)문법
 1) if: 괄호 내 조건이 참인경우 실행되는 문법 (거짓조건: false, undefined, null, 0, NaN, "" < empty string)
    - else if, else와 같이 사용
 2) switch: 괄호안 내 값에 따라 분기되는 문법 -> case, break, default와 함께 쓰임

반복문
 1) for: 초기,조건,증감문으로 이루어짐
 2) while: 괄호 내 조건이 거짓이 될 떄 까지 실행
 3) do-while: 먼저 진입한 후, 로직을 실행한 후에 조건을 확인
*/