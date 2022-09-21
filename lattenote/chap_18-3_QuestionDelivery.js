const Index = () => {
  return (
    <>
      <p>test</p>
    </>
  );
};

export default Index;
/*
[배달 문제 solution]
- 최단 경로 찾기

[문제 유형 파악]
- 그래프의 간선에 가중치 있음.

1. K 시간 이하인 마을을 알아내기 위해 1번 마을에서 특정 마을까지의 최단 거리 알아야 함.
2. BFS,DFS 사용 가능, 하지만 간선에 가중치 있음.
=> 다익스트라 알고리즘 사용.

* 자바스크립트에서 힙은 내장 기능으로 없다.

[최소 힙 구현]
1. 정점을 낮은 순서로 찾아야 하기 때문에 최소 힙 구현.
2. 최대 힙 조건의 반대로 구성.

*/

// 기본 최소 힙 구현 코드
/*
class MinHeap{
    constructor(){
        this.heap = [null];
    }

    push(value){
        this.heap.push(value);
        let currentIndex = this.heap.length - 1; // 이 부분 왜 이렇게 되는지 헷갈릴 듯.
        let parentIndex = Math.floor(currentIndex / 2);

        while (parentIndex !== 0 && this.heap[parentIndex] > value){
            const temp = this.heap[parentIndex];
            this.heap[parentIndex] = value;
            this.heap[currentIndex] = temp;

            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex / 2);
        }
    }

    pop(){
        const returnValue = this.heap[1];
        this.heap[1] = this.heap.pop();

        let currentIndex = 1;
        let leftIndex = 2;
        let rightIndex = 3;
        while(this.heap[currentIndex] > this.heap[leftIndex] || 
            this.heap[currentIndex] > this.heap[rightIndex]){
                if(this.heap[leftIndex] > this.heap[rightIndex]){
                    const temp = this.heap[currentIndex];
                    this.heap[currentIndex] = value;
                    this.heap[rightIndex] = temp;
                    currentIndex = rightIndex;
                } else{
                    const temp = this.heap[currentIndex];
                    this.heap[currentIndex] = value;
                    this.heap[leftIndex] = temp;
                    currentIndex = leftIndex;
                }
                leftIndex = currentIndex * 2;
                rightIndex = currentIndex * 2 + 1;
            }
            return returnValue;
    }
}
*/

// 필드 생성
class MinHeap {
  constructor() {
    this.heap = [null];
  }
  isEmpty() {
    return this.heap.length === 1;
  }
  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1; // 이 부분 왜 이렇게 되는지 헷갈릴 듯.
    let parentIndex = Math.floor(currentIndex / 2);

    // 이 부분 변경.
    while (parentIndex !== 0 && this.heap[parentIndex].cost > value.cost) {
      this._swap(parentIndex, currentIndex); // swap 함수 별도 구현.
      // const temp = this.heap[parentIndex];
      // this.heap[parentIndex] = value;
      // this.heap[currentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }
  _swap(a, b) {
    // 배열의 요소를 swap하는 함수 작성
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  pop() {
    // 추가 코드 시작.
    if (this.isEmpty()) return; // 예외 로직
    if (this.heap.length === 2) return this.heap.pop(); // 루트 정점만 남은 경우
    // 추가 코드 끝.
    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;
    // 비교하는 부분에 전부 `.cost`를 붙여줍니다.
    // 그리고 실제로 왼쪽, 오른쪽에 값이 있는지 체크하는 조건을 추가합니다.
    while (
      (this.heap[leftIndex] &&
        this.heap[currentIndex].cost > this.heap[leftIndex].cost) ||
      (this.heap[rightIndex] &&
        this.heap[currentIndex].cost > this.heap[rightIndex].cost)
    ) {
      if (this.heap[leftIndex] === undefined) {
        // 왼쪽 정점이 없을 경우
        this._swap(rightIndex, currentIndex);
      } else if (this.heap[rightIndex] === undefined) {
        // 오른쪽 정점이 없을 경우
        this._swap(leftIndex, currentIndex);
      } else if (this.heap[leftIndex].cost > this.heap[rightIndex].cost) {
        this._swap(rightIndex, currentIndex);
      } else if (this.heap[leftIndex].cost <= this.heap[rightIndex].cost) {
        this._swap(leftIndex, currentIndex);
      }
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  }
}

// 다익스트라 알고리즘 구현
/*
1. 먼저 힙 생성
2. 각 정점에 대한 최단 거리를 저장할 배열을 무한대로 초기화
3. 힙에 시작점 추가
4. 힙이 비어있지 않을 때까지 루프 돌기.
5. 선택된 정점에서 갈 수 있는 정점 찾기.
6. 더 짧은 경로라면 값을 갱신.
7. 루프가 종료되면 최단 거리 배열을 반환.

*/
function dijkstra(road, N){
    const heap = new MinHeap();
    heap.push({node:1, cost: 0}); // 1번 마을부터 시작.

    const dist = [...Array(N+1)].map(() => Infinity);
    dist[1] = 0;

    while (!heap.isEmpty()){
        // cost가 가장 낮은 정점을 뽑음.
        const {node: current, cost: currentCost} = heap.pop();

        for (const [src,dest,cost] of road){ // 루프 돌며 시작점, 도착점, 비용 꺼냄.
            const nextCost = cost + currentCost;
            
            // 양방향 고려.
            if (src === current && nextCost < dist[dest]){
                dist[dest] = nextCost;
                heap.push({node:dest, cost:nextCost});
            }else if (dest == current && nextCost < dist[src]){
                dist[src] = nextCost;
                heap.push({node:src, cost: nextCost});
            }
        }
    }
    return dist;
}

const N = 5;
const road = [[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]];
const K = 3;
// 문제 풀기.
function solution(N, road, K) {
    const dist = dijkstra(road, N);
    return dist.filter(x => x <= K).length; // dist 배열에서 K 이하인 값만 찾고 그 길이를 반환.
}

console.log(solution(N, road, K));