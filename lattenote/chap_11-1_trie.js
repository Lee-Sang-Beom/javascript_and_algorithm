const Index = () => {
  return (
    <>
      <p>test</p>
    </>
  );
};

export default Index;

// 트라이

/*
  자동 완성

  [트라이]
  1. 문자열을 저장하고 효율적으로 탐색하기 위한 트리 형태의 자료구조

  [트라이 특징]
  1. 검색어 자동완성, 사전 찾기에 응용될 수 있다.
  2. 문자열을 탐색할 때 단순하게 비교하는 것 보다 효율적으로 찾을 수 있다.
  3. L이 문자열의 길이일 때 탐색, 삽입은 O(L)만큼 걸린다.
  4. (단점) 대신 각 정점이 자식에 대한 링크를 전부 가지고 있기에 저장공간을 더 많이 사용한다.
  
  [트라이 구조]
  1. 루트는 비어있는 공백.
  2. 각 간선(LINK)은 추가될 문자를 키로 가진다.
  3. 각 정점은 이전 정점의 값 + 간선의 키를 값으로 가진다.
  4. 해시 테이블과 연결 리스트를 이용하여 구현 가능.

  02:42 참조
  https://school.programmers.co.kr/learn/courses/13213/lessons/91088#note


  */

// [트라이 구성] (인접리스트로 구성)

class Node {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(string) {
    let currentNode = this.root;

    for (const char of string) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new Node(currentNode.value + char));
      }
      currentNode = currentNode.children.get(char); // 다음 정점으로 이동
    }
  }

  has(string) {
    let currentNode = this.root;

    for (const char of string){
        if (!currentNode.children.has(char)){
            return false;
        }
        currentNode = currentNode.children.get(char);
    }
    return true;
  }
}

const trie = new Trie();
trie.insert("cat");
trie.insert("can");
console.log(trie.has("cat"));
console.log(trie.has("can"));
console.log(trie.has("cap"));