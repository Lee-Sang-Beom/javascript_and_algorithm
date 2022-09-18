// 큐

/*
    선형 큐, 원형 큐가 있다.

    [선형 큐]
    - 구성 1 : 배열
    - Dequeue는 앞에서 나나고, Enqueue는 뒤에서 채워진다.
    - 일정 크기가 차면 Full.

    - 구성 2 : 연결리스트

*/

// 배열로 구현
// 자바스크립트는 큐가 구현되어 있지 않다.

import { useInsertionEffect } from "react";

const Index = () => {
  return (
    <>
      <p>test</p>
    </>
  );
};

export default Index;

// shift 함수는 선형 시간이 걸리므로 사용 금지.
// [선형 큐 - 배열로 구현(이걸로 자주하는 것을 추천.)]

/*
class Queue{
    constructor(){
        this.queue = [];
        this.front = 0;
        this.rear = 0;
    }
    enqueue(value){
        this.queue[this.rear++] = value;
    }

    dequeue(){
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front += 1;
        return value;
    }

    peek(){
        return this.queue[this.front];
    }

    size(){
        return this.rear - this.front;
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
console.log(queue.dequeue());
queue.enqueue(8);
console.log("size", queue.size());
console.log("peek",queue.peek());
console.log(queue.dequeue());
console.log(queue.dequeue());

*/

// [선형 큐 - 연결리스트로 구현]
/*
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(newValue){
        const newNode = new Node(newValue);
        if (this.head === null){
            this.head = this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size +=1;
    }

    dequeue(){
        const value = this.head.value;
        this.head = this.head.next;
        this.size -=1;
        return value;
    }

    peek(){ // 맨 앞에 있는 요소 확인
        return this.head.value;
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
console.log(queue.dequeue());
queue.enqueue(8);
console.log("size", queue.size);
console.log("peek",queue.peek());
console.log(queue.dequeue());
console.log(queue.dequeue());
*/

// [원형 큐 - 배열로 구현] 자주 출제되지 않음.
// https://school.programmers.co.kr/learn/courses/13213/lessons/91076#note
