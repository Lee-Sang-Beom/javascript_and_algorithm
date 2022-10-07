
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

        if(this.head===null){
            this.head=this.tail=newNode;
        } else{
            this.tail.next= newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    dequeue(){
        const returnVal = this.head.value;

        this.head = this.head.next;
        this.size--;
        return returnVal;
    }

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