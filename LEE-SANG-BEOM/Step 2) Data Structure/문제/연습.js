class Queue{
    constructor(){
        this.queue=[];
        this.front=0;
        this.rear=0;
    }

    enqueue(value){
        this.queue[this.rear++] = value;
    }

    dequeue(){
        const returnValue = this.queue[this.front];
        delete this.queue[this.front];
        this.front+=1;
        return returnValue;
    }

    isEmpty(){
        return this.front === this.rear;
    }
}

function solution(n, edge){
    const graph = Array.from(new Array(n+1),()=>[]);
    for(const [start, dest] of edge){
        graph[start].push(dest);
        graph[dest].push(start);
    }

    const distance = Array(n+1).fill(0);
    distance[1] = 1;

    // BFS: 큐 사용
    const queue = new Queue();
    queue.enqueue(1);
    
    while(!queue.isEmpty()){
        const start = queue.dequeue();

        // start위치에서 갈 수 있는 모든 목적지를 탐색해서, 
        // distance배열을 갱신시키고, 거리를 구한다.
        for (const dest of graph[start]){
            // start에서 갈수있는 dest.
            // 이동할수있음에도 dest값이 한번도 바뀌지 않았다면 값 변경
            if(distance[dest] === 0){

                // 이제 해당 dest지점을 start로 잡고, 다음 dest로 이동할수 있게하기위해
                // queue에 추가
                queue.enqueue(dest);

                // 시작점부터 현재 지점 dest까지의 거리를 정해줌
                // BFS문제이므로, 시작점을 기준으로, 1회 이동한경우의 모든노드가 distance[dest] = 1을가짐
                // 1회 거친 이후는 distance[start]에 누적된 값 + 1을 통해 다음 목적지까지의 총 이동거리를 계산할 수 있음
                distance[dest] = distance[start] +1;
            }
        }
    }

    const max = Math.max(...distance);
    return distance.filter((i)=>i===max).length
    

}

solution(6,[[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]])