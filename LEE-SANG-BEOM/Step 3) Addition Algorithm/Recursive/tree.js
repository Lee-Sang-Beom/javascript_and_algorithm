
// 전위순회(preorder) : 부모->왼쪽->오른쪽 자식 순으로 압문
{
    function preorder(tree){
        // 방문(tree.root);
        // preorder(tree.left);
        // preorder(tree.right);
    }
}

// 중위 순회 : 왼쪽 자식 -> 부모 -> 오른쪽 자식 순으로 방문
{
    function inorder(tree){
        // inorder(tree.left);
        // 방문(tree.root);
        // inorder(tree.right);
    }
}

// 후위 순회 : 왼쪽 자식 -> 오른쪽 자식 -> 부모 순으로 방문
{
    function postorder(tree) {
        // postorder(tree.left);
        // postorder(tree.right);
        // 방문(tree.root);
      }
}

// 구현
{
    class Node{
        constructor(value){
            this.value = value;
            this.left = null;
            this.rign = null;
        }
    }

    class Tree{
        constructor(node){
            this.root = node;
        }

        // root - left - right
        preorder(currentNode){
            console.log(currentNode.value);
            if(currentNode.left){
                this.preorder(currentNode.left);
            }

            if(currentNode.right){
                this.preorder(currentNode.right);
            }
        }

        // left - root - right
        inorder(currentNode){
            if(currentNode.left){
                this.inorder(currentNode.left);
            }
            console.log(currentNode.value);
            if(currentNode.right){
                this.inorder(currentNode.right);
            }
        }

        // left - right - root
        postorder(currentNode){
            if(currentNode.left){
                this.postorder(currentNode.left);
            }
            if(currentNode.right){
                this.postorder(currentNode.right);
            }
            console.log(currentNode.value);
        }

    }

    const tree = new Tree(new Node(9));
    tree.root.left = new Node(3);
    tree.root.right = new Node(8);
    tree.root.left.left = new Node(2);
    tree.root.left.right = new Node(5);
    tree.root.right.right = new Node(7);
    tree.root.left.right.right = new Node(4);

    // tree.preorder(tree.root); // 9325487
    // tree.inorder(tree.root); // 2354987
    tree.postorder(tree.root); // 2453789
}