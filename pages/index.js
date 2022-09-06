// https://blog.naver.com/varkiry05/222155427325 (강의 코드 테스트 위한)

// 1. 구조 분해 할당 이용한 변수 swap
let a = 5,
  b = 10;
[a, b] = [b, a];
console.log("1.", a, b); // 10 5

// 2. 배열 생성으로 루프 제거
// 2-1. [5 6 7 8 9]
const sum = Array.from(new Array(5), (_, k) => k + 5).reduce(
  (prev, curr) => prev + curr,
  0
);

console.log("2-1", sum);

// 2-2
let sum1 = 0;
for (let i = 5; i < 10; i += 1) {
  sum1 += i;
}
console.log("2-2", sum1);

// 3. 배열 내 같은 요소 제거
const names = ["Lee", "Kim", "Park", "Lee", "Kim"];
const uniqueNamesWithArrayFrom = Array.from(new Set(names));
const uniqueNamesWithSpread = [...new Set(names)];

console.log("3.", names);
console.log("3.", uniqueNamesWithArrayFrom);
console.log("3.", uniqueNamesWithSpread);

// 4. Spread 연산자를 이용한 객체 병합
const person = {
  name: "lattesmoody",
  familyName: "latte",
  givenName: "smoody",
};

const company = {
  name: "chocolatte",
  address: "Seoul",
};

const lattesmoody = { ...person, ...company };
console.log("4.", lattesmoody);

// 5. &&와 || 활용
/// ||
// 기본값을 넣어주고 싶을 때 사용할 수 있습니다.
// participantName이 0, undefined, 빈 문자열, null일 경우 'Guest'로 할당됩니다.
const participantName = null;
const name = participantName || "Guest";

console.log("5-1.", name);

/// &&
// flag가 true일 경우에만 실행됩니다.
let test1 = 0;
const flag = false;
const func = () => {
  test1 = 10;
};

flag && func();

console.log("5-2",test1);

// 6-1. 구조 분해 할당 사용하기
const person2 = {
    name: 'lattesmoody',
    familyName: 'latte',
    givenName: 'smoody',
    company: 'chocolatte',
    address: 'Seoul',
}

const { familyName, givenName } = person2;
console.log("6-1", person2)

// 6-2. 객체 생성시 키 생략하기
const name3 = 'lattesmoody';
const company3 = 'chocolatte';
const person3 = {
  name3,
  company3
}
console.log("6-2",person3);

// 7. 비구조화 할당 사용하기
const makeCompany = ({ name, address, serviceName }) => {
    return {
      name,
      address,
      serviceName
    }
  };
const content_7 = makeCompany({ name: 'Cobalt. Inc.', address: 'Seoul', serviceName: 'Present' });

console.log ("7. ",content_7);

// 8. 동적 속성 이름
const nameKey = 'name';
const emailKey = 'email';
const person8 = {
  [nameKey]: 'lattesmoody',
  [emailKey]: 'cbtdeveloper@naver.com'
};
console.log("8.",person8);

// 9. !! 연산자를 사용하여 Boolean 값으로 바꾸기
// !! 연산자를 이용하여 0, null, 빈 문자열, undefined, NaN을 false로 그 외에는 true로 변경.
function check(variable) {
    if (!!variable) {
      console.log(variable);
    } else {
      console.log('잘못된 값');
    }
  }
  check(null); // 잘못된 값
  check(3.14); // 3.14
  check(undefined); // 잘못된 값
  check(0); // 잘못된 값
  check('Good'); // Good
  check(''); // 잘못된 값
  check(NaN); // 잘못된 값
  check(5); // 5

const Index = () => {
  return (
    <>
      <p>test</p>
    </>
  );
};

export default Index;
