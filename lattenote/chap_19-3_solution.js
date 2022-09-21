import { useInsertionEffect } from "react";

const Index = () => {
  return (
    <>
      <p>test</p>
    </>
  );
};

export default Index;

/*

[섬 연결하기 문제 풀이.]

[문제 파악]
1. 그림이 그래프의 형태를 가진다. (입출력 예 파트)
2. 최소비용
3. 모든 섬이 서로 통행 가능하도록.
=> 최소 신장 트리 사용.

*/
//[크루스칼 알고리즘 구현]
//* 각 간선 정렬, 서로소 집합을 위한 자료구조 정의
function solution(n,costs){
    let answer = 0;
    const sortedCosts = costs.sort((a,b)=> a[2] - b[2]);
    const parent = Array.from({length:n},(_,i) => i);

// Array.from() 의미.
// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`
// Array.from({length: 5}, (v, i) => i);
// [0, 1, 2, 3, 4]


//* 정렬된 간선 순회, 두 정점을 Union-Find 알고리즘을 통해 병 
    for (const [a,b,cost] of sortedCosts){
        if(!compare(parent,a,b)){
            answer += cost;
            union(parent,a,b);
        }
    }
    return answer;
}

// 최상위 원소 찾기 find() 함수
function find(parent,x){
    if(parent[x] === x){ // 부모와 원소가 같다면 최상위 원소
        return x;
    }
    // 경로 압축 최적화
    return parent[x] = find(parent,parent[x]);
}

// 두 원소 합치기 union() 함수
function union(parent, a, b){
    a = find(parent,a); // a의 최상위 원소
    b = find(parent, b); // b의 최상위 원소
    if (a<b){ // 더 낮은 원소가 부모 원소가 되도록 규칙 잡기.
        parent[b] = a;
    }else{
        parent[a] = b;
    }
}

// 두 원소가 같은 집합인지 검사 compare() 함수
function compare(parent,a,b){
    a = find(parent, a); // a의 최상위 원소
    b = find(parent, b); // b의 최상위 원소
    return a === b; // 같다면 같은 집합.
}

const n = 4;
const costs = [[0,1,1],[0,2,2],[1,2,5],[1,3,1],[2,3,8]];

console.log(solution(n,costs));


