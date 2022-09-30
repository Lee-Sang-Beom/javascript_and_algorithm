// participantName이 0, undefined, 빈 문자열, null일 경우 'Guest'로 할당
const participantName = undefined;
const name = participantName || 'Guest';
console.log(name);

// flag = true일 때만 함수 실행
const func = () =>{
    console.log('execute');
}
const flag = true;
flag && func();



// 객체 병합에 이용 가능
const makeCompany = (showAddress) =>{
    return{
        name : 'Cobalt',
        ... showAddress && {address: 'Seoul'} // true일 때만, 반환객체에 address 프로퍼티가 추가됨
        // 객체 안 객체가 되면 안되니, ...로 한번 빼줌
    }
};

console.log(makeCompany(true));
console.log(makeCompany(false));


