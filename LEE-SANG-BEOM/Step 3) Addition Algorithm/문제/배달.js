// 최소 힙 구현
class MinHeap {
  constructor() {
    // 0번 인덱스는 편의를 위해, 0으로 비워둠
    this.heap = [null];
  }

  /* 
      최소힙은 루트가 제일 작아야함
      1. 최초 요소 추가는 1번째 인덱스에 요소추가
      2. 요소 추가를 이어감
      3. 추가한 요소가, 부모 요소보다 작은 경우 부모요소와 위치교체
      4. 3번 과정을 추가한노드가 루트가 되기까지나, 부모 값이 추가한값보다 작은 경우까지 반복
    */

  isEmpty() {
    return this.heap.length === 1;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  /*
    push 되는 값 : 객체
    {
        node: 'number', // 정점번호
        cost: 'number', // 간선비용
    }
    */
  push(value) {
    // 추가는 항상 마지막에
    this.heap.push(value);

    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex != 0 && this.heap[parentIndex].cost > value.cost) {
      //   const tmp = this.heap[parentIndex];
      //   this.heap[parentIndex] = value;
      //   this.heap[currentIndex] = tmp;

      this.swap(parentIndex, currentIndex);

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  

  pop() {
    // 예외 로직
    if (this.isEmpty()) return;
    if (this.heap.length === 2) return this.heap.pop();

    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    // while반복 시 실제로 왼/오른쪽 값이 있는지 확인해야함
    while (
      (this.heap[leftIndex] &&
        this.heap[currentIndex].cost > this.heap[leftIndex].cost) ||
      (this.heap[rightIndex] && this.heap[currentIndex] > this.heap[rightIndex])
    ) {
      // 최소 힙은 작은게 루트여야하니, 작은쪽으로 내려가야함

      // 만약 왼쪽 정점이 없으면, 현재 보고 있는 값을 오른쪽으로 내려줘야 함
      if (this.heap[leftIndex] === undefined) { 
        this.swap(rightIndex, currentIndex);
      } else if(this.heap[rightIndex] === undefined) {
        this.swap(leftIndex, currentIndex);
      } else if (this.heap[leftIndex].cost > this.heap[rightIndex].cost) {
        // const temp = this.heap[currentIndex];
        // this.heap[currentIndex] = this.heap[rightIndex];
        // this.heap[rightIndex] = temp;

        this.swap(rightIndex, currentIndex);
        // currentIndex = rightIndex;


      } else if(this.heap[leftIndex].cost <= this.heap[rightIndex].cost) {
        // const temp = this.heap[currentIndex];
        // this.heap[currentIndex] = this.heap[leftIndex];
        // this.heap[leftIndex] = temp;

        this.swap(leftIndex, currentIndex);
        // currentIndex = leftIndex;
      }

      // 이동을 완료한 위치의 자식노드 인덱스 계산
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  }
}

function dijkstra(road, N){
    const heap = new MinHeap();
    heap.push({node:1, cost:0});

    // sparead operator로 일차원배열으로 만듬 : 0번째 인덱스는 편의상 비움
    const dist = new Array(N+1).fill(Infinity); 
    dist[1] = 0; // 1번마을의 거리는 0

    while(!heap.isEmpty()){ // heap이 비어있지 않은동안
        // cost가 가장 낮은 정점을 뽑는다. (루트부터 빼므로)
        const {node: current, cost: currentCost} = heap.pop();

        for(const [start, dest, cost] of road){ // 루프를 돌며 시작점, 도착점, 비용을 꺼낸다
            const nextCost = cost + currentCost; // 다음 정점까지 가는 총 비용

            // 해당 조건문은 현재 보는 current로 시작되어 연결된 도시를 확인하거나, current가 목적지(양방향)로 정해져 연결된 도시를 확인하여, 최소 경로를 구하는 과정이다.
            // 양방향 고려
            // 힙에서 pop한 current와 연결되지 않은 경우, if문에 들어가지않음
            if (start === current && nextCost < dist[dest]){
                // 만약 start정점이 현재 선택된 정점이고,
                // 다음 정점으로 가는 총 비용이 기존 값보다 작은 경우 (예 : infinity에서 가중치값으로 최초변경)

                // 얘시 : current:1일 때, (1,3,3) (1,4,1)은 가능, but (2,3,3) (5,1,1)은불가

                dist[dest] = nextCost; // dest까지가는 비용 갱신
                heap.push({node:dest, cost: nextCost}); // 힙(우선순위큐)에 정점과 정점까지 가는 비용 추가
            } else if(dest === current && nextCost < dist[start]){
                // 만약 도착점이 현재 보고 있는 정점이고,
                // 기존 갖고있는 값보다 목적지까지 가는 비용이 저렴한경우 

                // 예시 : current:2일 때, (4,2,1) (5,2,4) 가능 왜냐하면 (4,2,1)은 (2,4,1)과 같기 때문
                dist[start] = nextCost;
                heap.push({node: start, cost: nextCost}); 
            }
        }
    }

    return dist; // 1번 마을부터 각 마을까지 최단거리
}

function solution(N, road, K){
    const dist = dijkstra(road, N);
    return dist.filter( d => d <= K ).length;
}
