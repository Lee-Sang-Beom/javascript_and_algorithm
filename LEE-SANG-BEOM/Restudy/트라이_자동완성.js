// function makeTrie(words){
//     const root = {};
//     for (const word of words){
//         let current = root;
//         for (const letter of word){
//             if(!current[letter]){
//                 current[letter] = [0, {}];
//             }

//             // 학습된 단어 카운팅
//             current[letter][0] = 1 + current[letter][0];
//             current = current[letter][1];
//         }
//     }

//     return root;
// }


class makeTrie_2 {
    constructor(){
        this.root = {}
    }

    insert(words){
        for (const word of words){
            let current = this.root;

            for(const letter of word){
                if(!current[letter]){
                    current[letter] = [0,{}];
                }

                current[letter][0] += 1;
                current = current[letter][1];
            }
        }
    }
}

function solution(words){
    let answer = 0;
    const trie = new makeTrie_2();
    trie.insert(words);

    for(const word of words){
        // 총 입력해야 하는 문자를 계속 쌓도록 함
        let count = 0;
        let current = trie.root;

        for (const letter of word) { // iterable한 string을 for of 문법을 사용하여, 하나씩 접근
            count += 1;
            if (current[letter][0] <= 1) {
              break;
            }
      
            current = current[letter][1];
          }
      
          answer += count;
    }

    return answer;
}