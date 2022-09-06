const person = {
    name: 'Lee Sang Beom',
    familyName: 'Lee'
}

const company = {
    name: 'Cobalt',
    address: 'Seoul'
}

const merge = {...person, ...company};

// 중복된 name key는 마지막에 대입한 것으로 대체된다.
console.log(merge);