// 5-2장 이어서 (stack 말고 count 이용.)
// 메모리 적게 사용.

const Index = () => {
  console.log(solution("()"));
};
export default Index;

function solution(s){
    let count = 0;

    for(const c of s){
        if (c === '('){
            count += 1;
        }else{
            if(count === 0){
                return false;
            }
            count -= 1;
        }
    }
    return count === 0;
}