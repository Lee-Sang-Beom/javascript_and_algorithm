import { useInsertionEffect } from "react";

const Index = () => {
  return (
    <>
      <p>test</p>
    </>
  );
};

export default Index;

/*
  [연결리스트] 
  : 각 요소를 포인터로 연결하여 관리하는 선형 자료구조,
  각 요소는 노드라고 부른다.
  데이터 영역과 포인터 영역으로 구성된다.

  [연결리스트 특징]
  1. 탐색: O(n)
  2. 요소 추가 / 제거: O(1) 소요
  3. 종류: 단일 / 이중 / 환형

  [배열과 차이점]
  1. 메모리
  - 배열: 연속적으로
  - 연결리스트 : 각 데이터가 퍼져 있음(포인터 사용하여 각 영역 참조)

  2. 배열 요소 삭제 / 추가 : O(n)

  3. 연결리스트 요소 삭제 / 추가 : O(1)

  [단일 연결리스트]
  : Head에서 Tail까지 단방향으로 이어지는 연결 리스트

  [연결리스트 핵심]
  요소 찾기, 추가, 삭제

  [이중 연결리스트]
  : 양방향으로 이어지는 연결 리스트(자료구조 크기 조금 더 크다.)

  - 요소 추가: 추가할 노드의 앞 뒤로 이전, 다음 노드 수정,
              추가할 노드의 앞/뒤 노드의 이전/다음 노드 수정.

  - 요소 삭제:

  [환형 연결리스트]
  : 리스트의 Tail이 Head로 연결된다. (메모리 절약)
    원형 큐 등을 만들 때도 사용된다.
 */

// 실습

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  find(value) {
    let currNode = this.head;
    while (currNode.value !== value) {
      currNode = currNode.next;
    }
    return currNode;
  }

  append(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  insert(node, newValue) {
    const newNode = new Node(newValue);
    newNode.next = node.next;
    node.next = newNode;
    if (newNode.next === null) {
      this.tail = newNode;
    }
  }

  remove(value) {
    let prevNode = this.head;

    if (prevNode.value === value) {
      this.head = this.head.next;
      return true;
    }

    while (prevNode.next.value !== value) {
      prevNode = prevNode.next;
    }
    if (prevNode.next !== null) {
      // 지우고자하는 노드는 누구도 가리키지 않게됨 : 가비지 컬렉션으로 메모리에서 제거됨
      prevNode.next = prevNode.next.next;
      if (prevNode.next === null) {
        this.tail = prevNode;
      }
    } else {
      throw new Error("Invalid node");
    }
  }

  display() {
    let currNode = this.head;
    let displayString = "[";
    while (currNode !== null) {
      displayString += `${currNode.value}, `;
      currNode = currNode.next;
    }
    displayString = displayString.substring(0, displayString.length - 2);
    displayString += "]";
    console.log(displayString);
  }
}

const linkedList = new SinglyLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(5);
linkedList.display();
console.log(linkedList.find(3));
linkedList.remove(3);
linkedList.display();
linkedList.insert(linkedList.find(2), 10);
linkedList.display();
