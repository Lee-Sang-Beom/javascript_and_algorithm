const person = {
    name: 'Lee Sang Beom',
    familyName: 'Lee',
    company: 'Cobalt',
    address: 'Seoul',
}

// 필요한 것만 꺼내쓰기
const {name, company} = person;
console.log(name, company);