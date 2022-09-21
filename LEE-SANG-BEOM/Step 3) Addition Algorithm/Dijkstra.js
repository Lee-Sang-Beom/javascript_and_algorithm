// 그래프 간선 가중치가 다른 문제인 경우 : 다익스트라 사용
// 그래프 간선 가중치가 같은 경우 : DFS, BFS

// 다익스트라 : 우선순위 큐를 이용해 만듬
// O(ElogV)

/*
1. 시작점을 제외한 모든 정점 거리를 무한으로 설정 (시작점은 0)
2. 시작점 선택
3. 선택한 정점에서 갈 수 있는 정점의 거리 
        = 정점(기준 정점까지의 최단거리)값 + 간선(이동하고자 하는 정점까지의 거리)값으로 갱신한다.
4. 선택한 정점을 방문 처리한다.
5. 이미 방문한 정점과 무한인 정점을 제외하고, 가장 최단 거리인 정점을 선택한다
6. 더 이상 방문 가능한 정점이 없을 때 까지 3~5 반복
7. 도착점 값을 확인

*/


// 예시 : 정확한 내용은 문제/배달
{

        // function dijkstra(road, N) {
        //         const heap = new MinHeap(); // 우선순위 큐(힙)
        //         heap.push({ node: 1, cost: 0 }) // 1번 마을부터 시작
            
        //         const dist = [...Array(N + 1)].map(() => Infinity); // 계산하기 편하도록 N+1 길이만큼 리스트 생성
        //         dist[1] = 0; // 1번 마을은 무조건 거리가 0
            
        //         while (!heap.isEmpty()) { // heap이 비어있지 않다면
        //             // cost가 가장 낮은 정점을 뽑는다.
        //             const { node: current, cost: currentCost } = heap.pop();
            
        //             for (const [src, dest, cost] of road) { // 루프를 돌며 시작점, 도착점, 비용을 꺼낸다
        //                 const nextCost = cost + currentCost; // 비용
            
        //                 // 양방향을 고려하여 작성
        //                 if (src === current && nextCost < dist[dest]) {
        //                     // src가 현재 선택된 정점이면서 목적지까지 더 저렴할 경우
        //                     dist[dest] = nextCost; // 거리를 갱신한다.
        //                     heap.push({ node: dest, cost: nextCost }); // push
        //                 } else if (dest == current && nextCost < dist[src]) {
        //                     // dest가 현재 선택된 정점이면서 목적지까지 더 저렴할 경우
        //                     dist[src] = nextCost; // 거리를 갱신한다.
        //                     heap.push({ node: src, cost: nextCost }); // push
        //                 }
        //             }
        //         }
            
        //         return dist; // 1번 마을부터 각 마을까지의 최단 거리
        //     }
}

let N = 4
let village = Array.from(Array(N + 1), () => Array(N + 1).fill([Infinity, false]));
village[0][2][1] = 1
console.log(village[0]);