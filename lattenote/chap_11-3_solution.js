const Index = () => {
  return (
    <>
      <p>test</p>
    </>
  );
};

export default Index;

// 왜 이렇게 코드를 짜야하는지 전체적으로 이해를 아예 못함. 그냥 따라만 적었음.
// 해설 부분에선 왜 카운팅을 하는지 모르겠음.

function makeTrie(words) {
  const root = {};
  for (const word of words) {
    let current = root;
    for (const letter of word) {
      if (!current[letter]) current[letter] = [0, {}];
      // 리스트 첫 번째 값: 학습된 단어가 몇 개인지 카운팅,
      // 리스트 두 번째 값: 트리 구조로 이용할 노드 값
      current[letter][0] = 1 + (current[letter][0] || 0);
      current = current[letter][1];
    }
  }
  return root;
}

function solution(words){
    let answer = 0;
    const trie = makeTrie(words);

    for (const word of words){
        let count = 0;
        let current = trie;
        for (const [index, letter] of [...word].entries()){
            count += 1;
            if (current[letter][0] <= 1){
                break;
            }
            current = current[letter][1];
        }
        answer += count;
    }
    return answer;
}

const words = ["go","gone","guild"];
console.log(solution(words));