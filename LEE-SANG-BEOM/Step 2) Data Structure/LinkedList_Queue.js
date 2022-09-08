class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }

    enqueue(value){
        const newNode = new Node(value);
        if(this.head === null){
            this.head=newNode;
            this.tail=newNode;
        } else{
            // 큐는 FIFO 특성을 가지기 때문에, tail뒤에 새 값을 추가한다.
            this.tail.next = newNode;

            // 맨 끝에 값을 추가했으니, tail을 변경한다.
            this.tail = newNode;
        }
        this.size++;
    }

    dequeue(){
        // FIFO는 먼저 들어온게 사라진다.
        const value = this.head.value;
        this.head = this.head.next;
        this.size-=1;
        return value;
    }

    // queue의 가장 앞쪽 값을 반환
    peek(){
        return this.head.value;
    }

}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
console.log(queue.dequeue());
queue.enqueue(8);
console.log(queue.size);
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.dequeue());