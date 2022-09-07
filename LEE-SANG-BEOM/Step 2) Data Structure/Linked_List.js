{
  // 연결 리스트 : 탐색 O(n), 추가와 제거 O(1)
  // node는 값과 다음 노드를 가리키는 요소로 구성
  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  // head, tail은 초기 null값을 가짐
  class SimplyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }

    // 찾기 로직
    find(value) {
      // head를 시작으로 함
      let currNode = this.head;

      // 값을 찾을 때까지 이동
      while (currNode.value !== value) {
        currNode = currNode.next;
      }

      // 값을 찾으면 return
      return currNode;
    }

    // 추가 로직
    append(newValue) {
      const newNode = new Node(newValue);

      // 만약 리스트에 1개도 노드가 없으면
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }

    // 중간 위치에 삽입 : node 다음에 newValue를 가진 노드가 오도록
    insert(node, newValue) {
      const newNode = new Node(newValue);

      // 기존 node가 가리키는 값은 이제, newNode가 가리켜야 함
      newNode.next = node.next;

      // 기존 node는 newNode를 가리키도록
      node.next = newNode;

      if (newNode.next === null) {
        this.tail = newNode;
      }
    }

    remove(value) {
      // O(n)
      let prevNode = this.head;

      // remove 대상이 1번째 노드인경우
      if (prevNode.value === value) {
        this.head = this.head.next;
        return true;
      }

      // prevNode의 다음값이 지우고자하는 value를 가리키도록 이동
      while (prevNode.next.value !== value) {
        prevNode = prevNode.next;
      }

      // 만약 지우고자하는 prevNode.next값이 존재하는 경우, 다음다음값을 가리킴으로써 더이상 지우고자하는 값을 가리키지 않도록 함
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

      // displayString에 매번 붙여준 코드들 끝에는 ", "가 존재함. length길이 - 2를 수행해 이것들을 제거해줌
      displayString = displayString.substring(0, displayString.length - 2);
      displayString += "]";
      console.log(displayString);
    }
  }

  const linkedList = new SimplyLinkedList();

  //   linkedList.append(1);
  //   linkedList.append(2);
  //   linkedList.append(3);
  //   linkedList.append(5);
  //   linkedList.display();

  //   console.log(linkedList.find(3));

  //   linkedList.remove(3);
  //   linkedList.display();

  //   linkedList.insert(linkedList.find(2),10);
  //   linkedList.display();

  linkedList.append(1);
  linkedList.append(3);
  linkedList.append(4);

  linkedList.display();
  console.log(linkedList.find(4));

  // fix error : insert가 제일 앞에 있는 경우
  linkedList.insert(linkedList.find(1), 2);
  linkedList.display();

  // fix error : insert가 제일 뒤에 있는 경우
  linkedList.insert(linkedList.find(4), 5);
  linkedList.display();

  // fix error : remove가 제일 앞에서 발생하는 경우
  linkedList.remove(2);
  linkedList.display();

  // fix error : remove가 제일 뒤에서 발생하는 경우
  linkedList.remove(5);
  linkedList.display();
}
