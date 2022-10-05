/*

- 일반적으로 웹 사이트는 여러 자바스크립트로 구성된다.
이 웹사이트는 시간이 지남에 따라 복잡해지고, 그에 따라 스크립트 파일의 양도 크게 증가한다.

- 모듈은 스크립트 간 의존도를 파악할 수 있고, 실행순서를 쉽게 제어할 수 있다.
모듈과 컴포넌트는 자주 혼용된다. 모듈은 설계 시점에 의미있는 요소이고, 컴포넌트는 런타임 시점에 의미있는 요소이다.

- es6 import와 export를 통해 모듈을 불러오고 내보낼 수 있다.

    - hello.js
    export function hello(name){
        alert(`hello, ${name}`);
    }

    - index.html
    <script type="module">
        import {hello} from "./hello.js"
        hello('john');
    </script>

- 모듈의 특징 1: 항상 use strict로 실행된다.
    <script>
        let a=5;
        let b=5;
        c = a+b; // 일반 스크립트는 let이나 var를 생략하고 변수 선언이 가능하다. (이 경우, 전역스코프에 저장)
    </script>

    <script type="module">
        let a=5;
        let b=5;
        c = a+b; // 모듈은 let이나 var를 생략하지 못한다.
    </script>

- 모듈의 특징 2: 모듈은 최상위에 변수를 선언하더라도 전역스코프로 올라가지 않고, 자체적인 모듈레벨 스코프에 올라간다.
  - 일반스크립트는 변수를 최상위에 선언하면 전역스코프에 선언되어, 다른 스크립트에서 참조할 수 있다.
  - 모듈은 import하지 않는 한 탐색 불가
    <script type='module'>
        let a=5;
        let b=10;
        const c =a+b;
    </script>
    <script type='module'>
        alert(c); // 모듈은 참조불가(일반 스크립트는 가능)
    </script>
  
- 모듈의 특징3 : 딱 한번만 평가된다
  - 두 번 import로 불러오더라도 실행은 한번만!
    <script>
        import './hello.js';
    </script>
    <script>
        import './hello.js';
    </script>

- 모듈의 특징4 : 지연 실행된다.
   - 일반 스크립트는 body태그 안에 넣을경우, dom이 생성되기 전에 실행될 수 있다. 
     (html 파싱 중 스크립트 태그만나면 돔파싱을 중지하고 js엔진에 제어권을 넘기기 때문)
   - 모듈은 defer옵션(모든 dom렌더과정이 끝나야 스크립트 실행)을 넣지 않아도 자동으로 지연실행이 된다. 
     (dom이 다 만들어져야 진행)
*/