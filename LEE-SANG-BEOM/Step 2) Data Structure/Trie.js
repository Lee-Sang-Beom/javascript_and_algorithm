/*
 - 트라이 : 문자열을 저장하고, 효율적으로 탐색하기 위한 트리 형태의 자료구조
 - 검색어 자동완성, 사전찾기 응용
 - 문자열 탐색 시, 단순 비교보다 효율탐색
 - 문자열 길이 length : 탐색과 삽임은 o(length)만큼 발생

 구조)
  - 루트는 비어있음
  - 각 간선은 추가될 문자를 [키]로 가짐
  - 각 정점은 이전 정점의 값과, 간선의 키를 연결한 것을 값으로 가짐
  - 해시 테이블과 연결 리스트를 이용해 구현한다.
*/

class Node{

    // 인접 리스트 형태로 구현
    constructor(value = ""){
        this.value = value;
        this.children = new Map();
    }
}

class Trie{
    constructor(){
        // 트라이 생성 시, 루트는 비어있음.
        this.root = new Node();
    }

    has(string){
        let currentNode = this.root;

        for (const char of string){
            if (!currentNode.children.has(char)){
                return false;
            }
            currentNode = currentNode.children.get(char);
        }

        return true;
    }
    insert(string){

        // 문자열을 추가하면, 탐색을 위해 루트부터 시작
        let currentNode = this.root;

        // 문자열을 for of 문으로 문자 하나씩 확인
        for (const char of string){

            // 현재 노드에서 자른 문자열 char를 간선으로 가지고있지 않다면
            if (!currentNode.children.has(char)){

                // 새롭게 노드를 추가 : 자식 노드의 value값은 현재 노드의 원래값에 문자를 추가한 값 
                // 각 간선은 추가될 문자를 "키" 로 가진다.
                // 각 간선의 "키"에 대한 "값(value)"는 이전 정점의 값 currentNode.value 과 현재 간선의 키 값 char를 가진다.
                currentNode.children.set(char, new Node(currentNode.value + char));
            }

            // 반복을 위해 다음 정점으로 이동.
            currentNode = currentNode.children.get(char);


            // 해당 for문을 반복하면 문자열의 문자를 끝까지 추가한 트리가 완성됨
        }
    }

}

const trie = new Trie();
trie.insert('cat');
trie.insert('can');

console.log(trie.has('cat'));
console.log(trie.has('can'));
console.log(trie.has('cap'));

