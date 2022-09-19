const Index = () => {
  return (
    <>
      <p>test</p>
    </>
  );
};

export default Index;

/*

[트리 순회]
: 트리 자료구조에서 각 노드를 한 번씩 탐색하는 알고리즘

* 모든 순회는 루트 노드부터 시작.

1. 전위 순회(Preorder) VLR

preorder(tree){
    방문(tree.root);
    preorder(tree.left);
    preorder(tree.right);
}

2. 중위 순회(Inorder) LVR

inorder(tree) {
  inorder(tree.left);
  방문(tree.root);
  inorder(tree.right);
}

3. 후위 순회(Postorder) LRV

postorder(tree) {
  postorder(tree.left);
  postorder(tree.right);
  방문(tree.root);
}

*/

// 구현

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }
  
  preorder(currentNode) {
    result1.push(currentNode.value);
    if (currentNode.left) this.preorder(currentNode.left);
    if (currentNode.right) this.preorder(currentNode.right);
  }

  inorder(currentNode) {
    // 중위 순회
    if (currentNode.left) this.inorder(currentNode.left);
    result2.push(currentNode.value);
    if (currentNode.right) this.inorder(currentNode.right);
  }

  postorder(currentNode) {
    // 후위 순회
    if (currentNode.left) this.postorder(currentNode.left);
    if (currentNode.right) this.postorder(currentNode.right);
    result3.push(currentNode.value);
  }
  
}

const result1 = []; 
const result2 = [];
const result3 = [];

const tree = new Tree(new Node(1));
tree.root.left = new Node(2);
tree.root.right = new Node(3);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(5);
tree.root.right.left = new Node(6);
tree.root.right.right = new Node(7);
tree.root.right.right.left = new Node(8);
tree.root.right.right.right = new Node(9);

tree.preorder(tree.root);
console.log("결과 Preorder",result1);
tree.inorder(tree.root);
console.log("결과 Inorder",result2);
tree.postorder(tree.root);
console.log("결과 Postorder",result3);
