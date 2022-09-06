// 비구조화 할당
const makeCompany = ({name, address, serviceName ='Present'}) => {
    return {
        name,
        address,
        serviceName,
    }
}

const cobalt = makeCompany({name: 'Cobalt', address: 'Seoul'});
console.log(cobalt);