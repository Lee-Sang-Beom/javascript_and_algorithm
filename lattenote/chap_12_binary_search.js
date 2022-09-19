const Index = () => {
  return (
    <>
      <p>test</p>
    </>
  );
};

export default Index;

// 이진 탐색
/*
    [이진 탐색]
    1. 정렬되어 있는 요소들을 반씩 제외하며 찾는 알고리즘.
    2. O(log n) 만큼 시간복잡도가 걸린다.

    [이진 탐색의 특징]
    1. 반드시 정렬 되어 있어야 한다.
    2. 배열 혹은 이진 트리 이용하여 구현 가능.
    3. O(log n) => 상당히 빠름.

    [이진 탐색 구현 - 배열]
    1. mid = (left + right) / 2
    2. right = mid - 1
        mid = (left + right) /2

    3. left = mid + 1
        mid = (left + right) / 2

    // 중간에 요소 추가, 삭제 시 선형 시간 소모됨.

    [이진 탐색 트리]
    1. 이진 탐색을 위한 이진 트리
    2. 왼쪽 서브 트리는 루트보다 작은 값이 모여있음.
    3. 오른쪽 서브 트리는 루트보다 큰 값이 모여있음.

    [이진 탐색 트리 요소 추가]
    
    [이진 탐색 트리 요소 제거]
    1. 단말 정점 삭제 시
    2. 하나의 서브 트리를 가지는 경우
    3. 두 개의 서브트리를 가지는 경우

    [이진 탐색 트리의 문제점]
    1. 최악의 경우 한쪽으로 편향된 트리가 될 수 있음.
    2. 위와 같은 경우 순차 탐색과 동일한 시간복잡도.
    3. 해결 위해 아래 자료구조 사용. (균형을 맞출 수 있음.)
    - AVL 트리
    - 레드 - 블랙 트리


*/

// 배열 사용한 이진 탐색 구현.
/*
const array = [1,1,5,124,400,599,1004,2876,8712];

function binarySearch(array,findValue){
    let left = 0;
    let right = array.length - 1;
    let mid = Math.floor((left + right) / 2);
    while (left < right){
        if (array[mid] === findValue){
            return mid;
        }
        if (array[mid] < findValue){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
        mid = Math.floor((left + right) /2);
    }
    return -1;
}

console.log(binarySearch(array,2876));
console.log(binarySearch(array, 1));
console.log(binarySearch(array, 500));
*/

// 이진 탐색 트리 구현 (이진 탐색 + 트리)
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class binarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return;
    }
    let currentNode = this.root;
    while (currentNode !== null) {
      if (currentNode.value < value) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          break;
        }
        currentNode = currentNode.right;
      } else {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          break;
        }
        currentNode = currentNode.left;
      }
    }
  }

  has(value) {
    let currentNode = this.root;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      if (currentNode.value < value) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }
    return false;
  }
}

const tree = new binarySearchTree();
tree.insert(5);
tree.insert(4);
tree.insert(7);
tree.insert(8);
tree.insert(5);
tree.insert(6);
tree.insert(2);
console.log(tree.has(8));
console.log(tree.has(1));