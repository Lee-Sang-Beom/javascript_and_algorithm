// BFS: Queue로 구현 (시작 지점에서 가까운 정점부터탐색 : O(V+E))
// 자세한 내용은 폴더경로 : "문제/가장 먼노드.js 참고"
{
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
}

// DFS: Stack으로 구현 (최대한 깊은 정점부터 탐색하는 알고리즘: O(V+E))
{
}
