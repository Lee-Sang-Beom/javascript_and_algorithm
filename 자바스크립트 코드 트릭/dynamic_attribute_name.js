const nameKey = 'name';
const emailKey = 'email';

// ES6 추가기능 : 객체의 키를 동적 생성 > [] 사용
const person = {
    [nameKey] : 'Lee Sang Beom',
    [emailKey] : 'tkdqja975@naver.com'
};

console.log(person);
// {
//   name: 'Lee Sang Beom',
//   email: 'tkdqja975@naver.com'
// }