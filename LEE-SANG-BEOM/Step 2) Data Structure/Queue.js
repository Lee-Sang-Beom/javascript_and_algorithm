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
        this.front +=1;
        return value;
    }

    // queue의 가장 앞쪽 값을 반환
    peek(){
        return this.queue[this.front];
    }

    size(){
        return this.rear-this.front;
    }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);

console.log(queue.dequeue());
queue.enqueue(0);

console.log(queue.size());
console.log(queue.peek());

console.log(queue.dequeue());
console.log(queue.dequeue());