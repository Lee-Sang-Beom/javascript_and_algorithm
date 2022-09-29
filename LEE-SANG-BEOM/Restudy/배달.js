class MinHeap {
  constructor() {
    this.heap = [null];
  }

  isEmpty() {
    return this.heap.length === 1;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && this.heap[parentIndex].cost > value.cost) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {

    if(this.heap.length === 1) return;
    if(this.heap.length === 2) return this.heap.pop();
    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    const currentIndex = 1;
    const leftIndex = 2;
    const rightIndex = 3;

    while (
      (this.heap[leftIndex] &&
        this.heap[currentIndex].cost > this.heap[leftIndex].cost) ||
      (this.heap[rightIndex] &&
        this.heap[currentIndex].cost > this.heap[rightIndex].cost)
    ) {
        if(this.heap[leftIndex]===undefined){
            this.swap(currentIndex, rightIndex);
        } else if(this.heap[rightIndex] === undefined){
            this.swap(currentIndex, leftIndex);
        } else if(this.heap[leftIndex].cost < this.heap[rightIndex].cost){
            this.swap(currentIndex, leftIndex);
        } else {
            this.swap(currentIndex, rightIndex);
        }
    }

    return returnValue;
  }
}

function dijkstra(road, N){
    const heap = new MinHeap();
    heap.push({node: 1, cost :0 });

    const dist = Array(N+1).fill(Infinity);
    dist[1]=0;

    while(!heap.isEmpty()){
        const {node: currentNode, cost : currentCost} = heap.pop();
        for(const [start, dest, cost] of road){
            const nextCost = currentCost + cost;

            if (start === currentNode && dist[dest] > nextCost){
                dist[dest] = nextCost;
                heap.push({node: dest, cost: nextCost});
            } else if (dest === currentNode && dist[start] > nextCost){
                dist[start] = nextCost;
                heap.push({node: start, cost: nextCost});
            }
        }
    }

    return dist;
}

function solution(N, road, K) {
    const dist = dijkstra(road, N);
    return dist.filter((i)=>i<=K).length;
}