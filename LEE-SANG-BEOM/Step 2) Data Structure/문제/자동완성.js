function makeTrie(words){
    const root = {};
    for (const word of words){
        let current = root;
        for (const letter of word){
            if (!current[letter]){
                // 값을 넣는다. 
                // 리스트의 첫 번째 값은 학습된 단어가 몇 개인지를 카운팅
                // 두 번째 값은 트리 구조로 이용할 노드 값으로 사용한다
                current[letter] = [0,{}]; // current['g'] = [0,{}];
            }
            current[letter][0] = 1 + current[letter][0];
            current = current[letter][1];
        }
    }

    return root;
}

function solution(words) {
    let answer = 0;
    const trie = makeTrie(words);
    
    for (const word of words){
        let count = 0;
        let current = trie;

        for(const [index, letter] of [...word].entries()){ // array.entries()는 iterator 객체를 변수에 저장
            count+=1;
            if(current[letter][0] <=1){
                break;
            }

            current = current[letter][1];
        }

        answer+=count;
    }

    return answer;
}

console.log(solution(["go","gone","guild"]));
console.log(solution(["abc","def","ghi","jklm"]));
console.log(solution(["word","war","warrior","world"]));