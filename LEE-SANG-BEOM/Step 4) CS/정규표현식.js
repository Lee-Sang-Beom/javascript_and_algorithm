/*

1. 정규표현식 목적
 - 패턴을 이용하여, 문자를 검색(search), 대체(replace), 추출(extract)하기 위해 사용

2. 사용방법
  - /regexr/i
  - '/' 열면 시작
  - '/' 사이의 내용이 패턴
  - 닫는 '/' 이후 한글자가 플래그

3. 사용
 - 정규표현식 사용을 위해 패턴을 찾는 것이 가장 중요

 - 휴대폰 번호를 예로 들면, 세자리 숫자 > 하이픈 > 세or네자리 숫자 > 하이픈 > 세or네자리 숫자로 구성된다.
   ex) 054-472-8875, 010-6312-1224

 - 이메일 주소 패턴은? kim1234@naver.com
 - 패턴은 문자열 > @ > 문자열 > . > 문자열

4. 자바스크립트
 - RegExp 개겣로 정규표현식 기능을 제공한다.
*/
{
    // 생성자 함수 방식: new RegEXP(표현식, 플래그);
    const regExp1 =new RegExp("^\d+");
    const regExp2 =new RegExp("^\d+","gi");

    // 리터럴로도 생성가능
    const regexp1 =/^\d+/;
    const regexp2 =/^\d+/gi;
}

// test: 입력받은 문자열에 찾는 패턴이 있는지 확인하고, 있으면 true반환
{
    const msg = "안녕하세요, 010-1234-5678로 연락주세요";
    const regRef = /\d{3}-\d{3,4}-\d{4}/; // '/'로 열고닫음. 패턴은 3자리, 3 or 4자리, 4자리
    console.log(regRef.test(msg));
}

// exec: 입력받은 문자열에 찾는 패턴이 있는지 확인하고, 있으면 일치한 패턴정보 반환, 없으면 null 반환 (문자 추출에 해당)
{
    const msg = "안녕하세요, 010-1234-5678로 연락주세요";
    const regRef = /\d{3}-\d{3,4}-\d{4}/; // '/'로 열고닫음. 패턴은 3자리, 3 or 4자리, 4자리
    console.log(regRef.exec(msg));
}

// replace: 정규표현식 객체를 파라미터로 받아, 패턴이 있는 경우, 일치한 패턴 정보를 원하는 문자열로 바꾼다. (문자 대체에 해당)
{
    const msg = "안녕하세요, 010-1234-5678로 연락주세요";
    const regRef = /\d{3}-\d{3,4}-\d{4}/; // '/'로 열고닫음. 패턴은 3자리, 3 or 4자리, 4자리
    console.log(msg.replace(regRef, "이 전화번호")); // regRef 패턴을 확인하면, 2번째인자로 전달한 값으로 대체 
}

// search: 정규표현식 객체를 파라미터로 받아, 패턴이 있는 경우, 일치한 패턴 정보 시작위치를 반환한다. (문자 검색에 해당)
{
    const msg = "안녕하세요, 010-1234-5678로 연락주세요";
    const regRef = /\d{3}-\d{3,4}-\d{4}/; // '/'로 열고닫음. 패턴은 3자리, 3 or 4자리, 4자리
    console.log(msg.search(regRef)); // 012345(,)67(0)
}

// run-length encoding: 매우 간단한 비손실 압축방법임
