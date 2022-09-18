const Index = () => {
  return (
    <>
      <p>test</p>
    </>
  );
};

export default Index;

/*
[트리]
1. 방향 그래프의 일종
2. 정점을 가리키는 간선이 하나 밖에 없는 구조

Root, Node, Leaf Node, Level 1,2,3...

[트리의 특징]
1. 루트 정점을 제외한 모든 정점은 반드시 하나의 부모 정점을 가짐
2. 정점이 N개인 트리는 반드시 N-1개의 간선을 가진다.
3. 루트에서 특정 정점으로 가는 경로는 유일.

[이진 트리]
1. 각 정점이 최대 2개의 자식을 가지는 트리.

종류: 이진 트리, 완전 이진 트리, 포화 이진 트리, 편향 트리

[이진 트리 특징]
1. 정점이 N개인 이진 트리는 최악의 경우 높이 N 될 수 있음.
2. 정점이 N개인 포화 또는 완전 이진 트리 높이는 log N
3. 높이가 h인 포화 이진 트리는 2^-1개의 정점 가짐.
4. 일반적인 이진트리를 사용하는 경우 많지 않음
- 이진 탐색 트리
- 힙
- AVL 트리
- 레드 블랙 트리

[트리 구현]
1. 그래프랑 동일

[이진 트리 구현]


*/

// [이진 트리 배열로 구현]

// const tree = [
//   undefined,
//   9,
//   3,
//   8,
//   2,
//   5,
//   undefined,
//   7,
//   undefined,
//   undefined,
//   undefined,
//   4,
// ];

// [이진 트리 연결 리스트로 구현]

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size += 1;
  }

  dequeue() {
    const value = this.head.value;

    this.head = this.head.next;
    this.size -= 1;
    return value;
  }

  peek() {
    return this.head.value;
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  display() {
    const queue = new Queue();
    queue.enqueue(this.root);
    while (queue.size) {
      const currentNode = queue.dequeue();
      console.log(currentNode.value);
      if (currentNode.left) queue.enqueue(currentNode.left);
      if (currentNode.right) queue.enqueue(currentNode.right);
    }
  }
}
const tree = new Tree(new Node(9));
tree.root.left = new Node(3);
tree.root.right = new Node(8);
tree.root.left.left = new Node(2);
tree.root.left.right = new Node(5);
tree.root.right.right = new Node(7);
tree.root.left.right.right = new Node(4);
tree.root.left.left.right = new Node(2);
console.log(tree.display());

