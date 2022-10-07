class Queue{
    constructor(){
        this.queue=[];
        this.front = this.rear = this.size = 0;
    }

    enqueue(value){
        this.queue[this.rear++] = value;
        this.size++;
    }

    dequeue(){
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front += 1;
        this.size--;
        return value;
    }

    peek(){
        return this.queue[this.front];
    }


}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
console.log(queue.dequeue());
queue.enqueue(0);

console.log(queue.size);
console.log(queue.peek());

console.log(queue.dequeue());
console.log(queue.dequeue());