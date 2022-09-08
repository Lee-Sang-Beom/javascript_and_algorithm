class Queue{
  constructor(maxSize){
    this.maxSize=maxSize;
    this.queue=[];
    this.front=0;
    this.rear=0;
    this.size=0;
  }

  isFull() {
    return this.size===this.maxSize;
  }

  enqueue(value){
    if(this.isFull()){
      console.log(`queue is full`);
      return
    } else{
      this.queue[this.rear]=value;
      this.rear = (this.rear+1)%this.maxSize;
      this.size+=1;
    }
  }

  dequeue(){
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front = (this.front+1)%this.maxSize;
    this.size-=1;
    return value;
  }

  peek(){
    return this.queue[this.front];
  }

}

const queue = new Queue(5);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);

console.log(queue.dequeue());
queue.enqueue(0);

console.log(queue.peek());

console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue.size);