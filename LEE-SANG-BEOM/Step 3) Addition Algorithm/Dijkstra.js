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