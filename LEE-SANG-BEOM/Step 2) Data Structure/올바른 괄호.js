function solution(s){
    // 첫 요소가 닫히면 오류
    if (s[0] === ")") {
        return false
    }

    // 마지막 요소가 열리면 오류
    else if (s[s.length - 1] === "(") {
        return false
    }

    // 스택에는 "(" 만 push, ")"를 만나면 하나씩 사용한 거로 치고 pop
    const stack = [];

    for (let i=0; i < s.length; i++) {

        // 만약 stack요소가 있고, 순회 요소가 ")"이면, "(" 가 있어야 하기 때문에 pop
        if (stack && s[i] === ")") {
            stack.pop();
        } else {
            // i번째 stack요소가 비었거나, stack요소가 있고 "("를 만났을 때 push한다.
            // 이후 i에 대해 ")"를 만나면 하나씩 사용한다는 의미로 pop한다.
            stack.push(s[i]);
        }
    }

    if (stack.length !== 0) {
        return false;
    } else {
        return true;
    }
}