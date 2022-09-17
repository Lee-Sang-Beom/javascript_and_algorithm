function solution(number, k) {

    /*
     큰 값이 나오면, 이전값 중 더 작은 값은 삭제
     스택 바닥에서부터 top은 큰수부터 작은수로 나열되어야함.

     스택 사용 시, [ , , , , * ] 여기 계속 값들이 추가되는데,
     이전에 있던 값이 새로 오른쪽에 추가되는 값보다 작으면, 이전의 작은 숫자들은 모두 제거됨

     아이디어가 가장 중요한 그리디 문제
    */
   
    const stack = [];
    let count = 0; // 몇 개 지웠는지 count

    for (const item of number){

        // count가 k보다 작고,
        // 좌->우로 이동하는 top의 값 오른쪽에 더 큰 게 들어오면 더 작은 값들은 pop을 해줘야함
        while(count < k && stack[stack.length-1] < item){
            stack.pop();
            count+=1;
        }

        // 순차적으로 나머지는 item을 그대로 push
        // 왼쪽 -> 오른쪽으로 가면서 큰 수에서 작은수로 나열됨
        stack.push(item);
    }

    // 9876543 같은경우 stack이 안지워질수있음
    while(count < k){
        // 마지막 값이 제일 작을테니 pop만하면됨
        stack.pop();
        count+=1;
    }

    // stack을 문자열로 변경
    console.log(stack);
    return stack.join("");
}

// 숫자라고 했지만 문자열로 넣어버림.
// 함수 내부에서 문자열을 숫자로 변환할 필요 없이 문자열 그자체의 크기 비교
console.log(solution('1924',2));
console.log(solution('1231234',3));
console.log(solution('4177252841',4));
