function makeTrie(words) {
  const root = {};
  for (const word of words) {
    let current = root;
    for (const letter of word) {
      if (!current[letter]) {
        // 값을 넣는다.
        // 리스트의 첫 번째 값은 학습된 단어가 몇 개인지를 카운팅
        // 두 번째 값은 트리 구조로 이용할 노드 값으로 사용한다
        current[letter] = [0, {}]; // current['g'] = [0,{}];
      }
      current[letter][0] = 1 + current[letter][0];
      current = current[letter][1];
    }
  }

  return root;
}

class makeTrie_2 {
  constructor() {
    this.root = {};
  }

  insert(words) {
    for (const word of words) {
      let current = this.root;
      for (const letter of word) {
        if (!current[letter]) {
          current[letter] = [0, {}];
        }
        current[letter][0] = 1 + current[letter][0];
        current = current[letter][1];
      }
    }
  }
}

function solution(words) {
  let answer = 0;
  const trie = new makeTrie_2();
  trie.insert(words);

  for (const word of words) {
    let count = 0;
    let current = trie.root;

    /*

        === 다음강의 해설내용 ===

        for (const [index, letter] of [...word].entries()) {
          count += 1;
          if (current[letter][0] <= 1) {
            break;
          }

          current = current[letter][1];
        }
        
        ★ array.entries()는 배열의 각 인덱스에 대한 키/값 쌍을 가지는 새로운 Array Iterator객체를 반환해요.

        const array1 = ['a', 'b', 'c'];
        const iterator1 = array1.entries();
        console.log(iterator1.next().value); // Array [0, "a"]
        console.log(iterator1.next().value); // expected output: Array [1, "b"]
       

        === 아래코드 설명 ===

        위의 주석처리된 해설 내용 부분에서, 
        문자열 자체가 for of가 가능한 iterable한 객체이기 때문에 for of로 접근이 가능하다는 사실을 생각해 볼 수 있습니다.

        이 부분에서 key | value 쌍을 활용하기 위해 entries()를 활용하지 않을 생각이라면,
        for of를 다음과 같이 좀 더 간단하게 사용하여 문제를 풀 수도 있습니다.
    */

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

console.log(solution(["go", "gone", "guild"]));
