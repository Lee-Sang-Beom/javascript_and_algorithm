class Queue {
  constructor(){
    this.queue=[];
    this.front=this.rear=this.size=0;
  }

  enqueue(value){
    this.queue[this.rear++]=value;
    this.size++;
  }

  dequeue(){
    const returnValue=this.queue[this.front]
    delete this.queue[this.front]
    this.front++;
    this.size--;
    return returnValue;
  }

  peek(){
    return this.queue[this.front]
  }
}

function solution(priorities, location) {
  const queue=new Queue();
  for (let i=0; i<priorities.length; i++){
    queue.enqueue([priorities[i], i]);
  }

  priorities.sort((a,b)=>b-a);
  let count=0;

  while(queue.size){
    const current = queue.peek();
    if(current[0] < priorities[count]){
      queue.enqueue(queue.dequeue());
    } else{
      const value = queue.dequeue();
      count++;

      if(value[1]===location){
        return count;
      }
    }
  }
}

console.log(solution([2, 1, 3, 2], 2));
