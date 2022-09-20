const Index = () => {
  return (
    <>
      <p>test</p>
    </>
  );
};

export default Index;

/*
    [스택] (LIFO - Last In First Out)

    1. Array로 표현 가능.
    2. Stack을 Linked List로 표현 가능. (연결리스트의 Head == 스택의 Top)
*/

// Stack을 array로 구현.

const stack = [];

// Push
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);

stack.pop();
console.log(stack);

console.log(stack[stack.length - 1]);

// Stack을 Linked List로 구현.

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.size += 1;
  }

  pop() {
    const value = this.top.value;
    this.top = this.top.next;
    this.size -= 1;
    return value;
  }

  size() {
    return this.size;
  }
}

const stackForLinkedList = new Stack();
stackForLinkedList.push(1);
stackForLinkedList.push(2);
stackForLinkedList.push(3);
console.log(stackForLinkedList.pop());
stackForLinkedList.push(4);
console.log(stackForLinkedList.pop());
console.log(stackForLinkedList.pop());