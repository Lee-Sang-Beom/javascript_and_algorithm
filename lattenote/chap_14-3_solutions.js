const Index = () => {
  return (
    <>
      <p>test</p>
    </>
  );
};

export default Index;

/*
  [핵심 키워드]
  : "노드", "간선", "최단경로"

  1. 최단 경로가 제일 큰 경우의 집합을 구하는 문제.

  */

// BFS (큐를 사용)
/*
  // 배열로 푸는 방법 먼저.
function solution(n, edge) {
  const graph = Array.from(Array(n + 1), () => []);

  for (const [src, dest] of edge) {
    graph[src].push(dest);
    // 간선은 양방향
    graph[dest].push(src);
    // 그래프 구현 끝.
  }

  const distance = Array(n + 1).fill(0);
  distance[1] = 1;

  
  const queue = [1];
  while (queue.length > 0) {
    // shift는 O(n) 이지만 요소가 적을 경우 자바스크립트 엔진에서 최적화 진행함.
    const src = queue.shift();
    for (const dest of graph[src]) {
      if (distance[dest] === 0) {
        queue.push(dest);
        distance[dest] = distance[src] + 1;
      }
    }
  }
  const max = Math.max(...distance);
  return distance.filter((item) => item === max).length;

  */

// 큐 사용하여 문제 해결
class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  isEmpty() {
    return this.rear === this.front;
  }
}
function solution(n, edge) {
  const graph = Array.from(Array(n + 1), () => []);

  for (const [src, dest] of edge) {
    graph[src].push(dest);
    // 간선은 양방향
    graph[dest].push(src);
    // 그래프 구현 끝.
  }

  const distance = Array(n + 1).fill(0);
  distance[1] = 1;

  const queue = new Queue();
  queue.enqueue(1);
  while (!queue.isEmpty()) {
    // shift는 O(n) 이지만 요소가 적을 경우 자바스크립트 엔진에서 최적화 진행함.
    const src = queue.dequeue();
    for (const dest of graph[src]) {
      if (distance[dest] === 0) {
        queue.enqueue(dest);
        distance[dest] = distance[src] + 1;
      }
    }
  }
  const max = Math.max(...distance);
  return distance.filter((item) => item === max).length;
}

const n = 6;
const vertex = [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
];
console.log(solution(n, vertex));
