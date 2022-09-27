function solution(n, arr1, arr2) {
    let answer = [];
    for (let i=0; i<n; i++){
        const result = arr1[i] | arr2[i]; // 합집합
        const bit = result.toString(2) // 2진수로 변환
        const blankString = " ".repeat(n - bit.length);
        // /[원하는 단어]/gi 
        // 자바스크립트에는 replaceAll​ 이란 함수가 없다. 따라서 replace 함수에 정규식을 넣어 사용한다
        const bitString = bit.replace(/1/gi, "#").replace(/0/gi," ");
        answer.push(blankString + bitString);
        
    }
    return answer;
}

solution(6, [46, 33, 33 ,22, 31, 50], [27 ,56, 19, 14, 14, 10])