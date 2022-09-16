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
        delete this.queue[this.front++];
        return returnValue;
    }

    isEmpty(){
        return this.rear === this.front;
    }
}

function solution(n, edge) {

    // 그래프 초기화
    // 2차원 리스트
    // 0번째 인덱스는 편의상 비우고 사용하기 위해, n+1개
    // 각 행은 []을 가짐
    const graph = Array.from(new Array(n+1),(v,k) => []);
    
    // 그래프 완성
    for (const [start, dest] of edge){

        // 그래프는 양방향!
        graph[start].push(dest);
        graph[dest].push(start);
    }

    // 각 정점에 거리를 기록하는 배열 : 0번째는 편의상 비우고, 0으로 채움 
    const distance = Array(n+1).fill(0);
    
    // start정점은 1으로 지정 (이제 멀어질수록 +1인 값임)
    distance[1] = 1;

    // BFS : queue
    const queue = new Queue();
    queue.enqueue(1);
    // queue의 원소가 있을동안 반복
    while (!queue.isEmpty()){

        // 배열 맨 앞 값 제거 (unshift는 맨 앞에 요소 추가)
        const start = queue.dequeue(); // shift는 o(N)시간이지만, 요소가 적을땐 js엔진에서 최적화해줌

        // start로부터 갈수있는 모든경로 조회
        for (const dest of graph[start]){
            if (distance[dest] === 0){ // 한번도 들르지 않은 경우
                queue.enqueue(dest); // enqueue
                distance[dest] = distance[start] + 1 // 간선을 따라 이동했으니, 먼 거리를 출력해야 하니 기존 거리에서 이동횟수 + 1
            }
        }
    }

    // 가장 큰 값이 무엇?
    const max = Math.max(...distance);

    // 해당 값을 가지는 원소가 몇개?
    return distance.filter((v)=>{
        return v===max
    }).length;
}

solution(6,[[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]])