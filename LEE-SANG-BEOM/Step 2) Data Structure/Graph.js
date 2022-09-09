/*
 * 그래프 구현
 - 인접행렬 : 2차원 배열 이용
 - 인접리스트 : 연결 리스트로 표현
*/

// 인접 행렬
{
    const graph= Array.from(new Array(5), (v,k) => {
        // 요소(행) 하나 당 false 5개를 가지는 배열을 반환
        return Array(5).fill(false);
    });

    console.log(graph); // 5x5 행렬

    graph[0][1]= true;
    graph[0][3]= true;
    graph[1][2]= true;
    graph[2][0]= true;
    graph[2][4]= true;
    graph[3][2]= true;
    graph[4][0]= true;

    console.log(graph);
}

// 인접리스트
{
    const graph = Array.from(new Array(5), (v,k)=> {
        return [];
    });

    console.log(graph); // [ [], [], [], [], [] ]

    // if) 0->1방향 추가 시 push 이용
    graph[0].push(1); // 0-1
    graph[0].push(3); // 0-3

    graph[1].push(2); // 1-2

    graph[2].push(0); // 2-0
    graph[2].push(4); // 2-4
    graph[3].push(2); // 3-2
    graph[4].push(0); // 4-0

    console.log(graph); 
    /*
    [ 
        [ 1, 3 ], 
        [ 2 ], 
        [ 0, 4 ], 
        [ 2 ], 
        [ 0 ] 
    ]
    */

}