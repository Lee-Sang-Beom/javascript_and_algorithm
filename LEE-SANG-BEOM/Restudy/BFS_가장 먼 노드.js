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
        const returnValue = this.queue[this.front];
        delete this.queue[this.front++];
        return returnValue;
    }

    isEmpty(){
        return this.front === this.rear;
    }
}

function solution(n, edge){
    const graph = Array.from({length: n+1}, ()=>[]);
    const distance = Array.from({length:n+1}).fill(0);

    for (const [start, dest] of edge){
        graph[start].push(dest);
        graph[dest].push(start);
    }

    distance[1] = 1;

    const queue = new Queue();
    queue.enqueue(1);

    while(!queue.isEmpty()){
        const start = queue.dequeue();

        for (const dest of graph[start]){
            if(distance[dest]===0){
                queue.enqueue(dest);
                distance[dest] = distance[start]+1;
            }
        }
    }

    const maxSave = Math.max(...distance);
    return distance.filter(i=>i===maxSave).length;
}