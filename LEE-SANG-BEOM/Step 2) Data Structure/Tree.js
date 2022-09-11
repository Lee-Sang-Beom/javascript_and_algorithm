/*
1. 트리
  - 방향 그래프의 일종으로 정점을 가리키는 간선이 하나밖에 없는 구조를 가짐
  - Root: Level 1
  - 최하단 노드 : Leaf Node
  - 한 정점에서 뻗어나가는 간선 수 : Degree
  - Level : 트리의 높이 (루트 하나만 있으면 Level 1)

2. 특징 
 - 루트 정점을 제외한 모든 정점은 반드시 하나의 부모 정점을 가짐
 - 정점이 n개인 트리는 반드시 n-1개 간선을 가진다.
 

3. 이진 트리
 - 이진 트리는 각정점이 최대 2개의 자식을 가지는 트리
 - 완전 이진트리 : 마지막 레벨을 제외하고, 모든 정점이 채워짐
 - 포화 이진트리 : 마지막 레벨까지 모든 정점이 채워진 트리
 - 편향 트리: 한쪽 방향으로만 정점이 채워진 트리

4. 이진 트리 특징
 - 정점 n개인 이진 트리는 최악의 경우 높이 n
 - 정점 n개인 포화/완전이진트리의 높이는 log n
 - 높이 h인 포화이진트리는 2**h - 1 개 정점을 가짐

5. 트리 구현방법
 - 인접 행렬
 - 인접 리스트
*/

// 인접 행렬 구현
// 0번 인덱스는 편의를 위해 비워둔다.
// left = 부모 index*2
// right = 부모 index*2+1
// parent = floor(index/2) : 부모를 알기 위해서 인덱스를 2로나누고 소수점을 버림
{
  const tree = [
    undefined, // 0번 인덱스는 편의를 위해 비워둔다.
    9, // 1번 인덱스 : root
    3,
    8, // 부모인덱스는 1 :  1*2, 1*2+1
    2,
    5,
    undefined,
    7, // 부모인덱스는 2: 2*2, 2*2+1 | 부모인덱스는 3 : 3*2, 3*2+1
    undefined,
    undefined,
    undefined,
    4, // 부모인덱스는 4: 4*2, 4*2+1 | 부모인덱스는 5 : 5*2, 5*2+1
  ];
}

// 이진 트리 연결 리스트
{
  class Node {
    constructor(value) {
      this.value = value;

      // 트리의 왼쪽아래, 오른쪽 아래로 뻗어나가는 가지
      this.left = null;
      this.right = null;
    }
  }

  class queueNode {
    constructor(value) {
      this.value = value;

      // 트리의 왼쪽아래, 오른쪽 아래로 뻗어나가는 가지
      this.next = null;
    }
  }

  class Queue {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
    }

    enqueue(value) {
      const node = new queueNode(value);
      if (this.head === null) {
        this.head = this.tail = node;
      } else {
        this.tail.next = node;
        this.tail = node;
      }

      this.size++;
    }

    dequeue() {
      const value = this.head.value;
      this.head = this.head.next;
      this.size--;
      return value;
    }
  }

  class Tree {
    constructor(newNode) {
      this.root = newNode;
    }

    display() {
      const queue = new Queue();
      queue.enqueue(this.root); // 처음부터 볼거임

      while (queue.size) {
        const currNode = queue.dequeue();
        console.log(currNode);

        if (currNode.left) {
          queue.enqueue(currNode.left);
        }

        if (currNode.right) {
          queue.enqueue(currNode.right);
        }
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

  tree.display();
}
