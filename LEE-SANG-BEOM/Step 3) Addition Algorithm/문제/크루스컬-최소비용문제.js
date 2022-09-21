// 두 원소 합치기: 서로 다른 두 집합을 병합함
// a,b 집합의 최상위요소를 찾고, 이를 하나의 집합으로 만들기 위해 사용한다.
function union(parent, a, b){
    a= find(parent, a); // a의 최상위원소
    b= find(parent, b); // b의 최상위원소

    if(a<b){ // 더 낮은 원소가 부모가 되도록 규칙을 정한다.
        parent[b] = a;
    } else {
        parent[a] = b;
    }
}
// 모든 섬을 방문하고, 최소비용이 되야함 : 크루스컬 (MST개념)

function find(parent, a){
    if (parent[a] === a) return a;

    // 재귀 구문으로 계속해서, 집합의 최상위원소를 찾아나감
    // parent: 저장할 배열
    // parent[a]: a가 누구에게 속했는가? > 계속 parent[a]할 시, 최상위를 찾게 됨
    return parent[a] = find(parent, parent[a]);
}

// 두 원소가 같은 집합인지를 검사함
function compare(parent, a,b){
    a= find(parent, a); // 최상위 부모가 누군지 탐색
    b= find(parent, b);
    return a===b;
}

function solution(n, costs){
    // 각 간선 정렬
    const sortedCosts = costs.sort((a,b)=>a[2]-b[2]);
    let answer = 0;

    // 서로소 집합을 위한 자료구조: 자신이 속한 집합의 부모를 저장
    const parent = Array.from(Array(n), (v,k)=>k);

    for(const [a,b,cost] of sortedCosts){
        // 만약, a와 b가 다른 집합인 경우
        if(!compare(parent,a,b)){
            answer+=cost;

            // 만약 (a,b,cost)면 a-b 이렇게 연결됨
            // 그럼, a와 b는 초기에 집합이 따로있는데 a의 부모는 a, b의 부모도 a로 만들면서 같은 집합으로 만들어 주는 것
            union(parent,a,b);
        }
    }

    return answer;
    

}

console.log(solution(4,[[0,1,1],[0,2,2],[1,2,5],[1,3,1],[2,3,8]]));