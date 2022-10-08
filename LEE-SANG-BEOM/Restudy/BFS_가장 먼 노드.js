class Queue{
    constructor(){
        this.queue=[];
        this.front=this.rear=this.size=0;
    }

    enqueue(value){
        this.queue[this.rear++]=value;
        this.size++;
    }

    dequeue(){
        const value = this.queue[this.front];
        delete this.queue[this.front];
        this.front++;
        this.size--;
        return value;
    }

    peek(){
        return this.queue[this.front];
    }

    isEmpty(){
        return this.size;
    }
    
}

function solution(n, edge){
    const graph = Array.from(new Array(n+1), ()=>[]);
    for (const [start, end] of edge){
        graph[start].push(end);
        graph[end].push(start);
    }

    const distance = Array.from({length:n+1}).fill(0);
    distance[1] = 1;

    const queue=new Queue();
    queue.enqueue(1);

    while(queue.size){
        const start= queue.dequeue();

        for (const end of graph[start]){
            if(distance[end]===0){
                distance[end] = distance[start] + 1;
                queue.enqueue(end);
            }
        }
    }

    const max = Math.max(...distance);
    return distance.filter((i)=>i===max).length;

}