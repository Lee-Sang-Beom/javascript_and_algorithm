// 문제

/*

가로, 세로 길이가 n인 정사각형으로된 체스판이 있습니다. 
체스판 위의 n개의 퀸이 서로를 공격할 수 없도록 배치하고 싶습니다.
예를 들어서 n이 4인경우 다음과 같이 퀸을 배치하면 n개의 퀸은 서로를 한번에 공격 할 수 없습니다.

문제핵심) 퀸들이 서로 같은 행,열,대각선에 위치하지 않는 상황 자체가 연출되어야 count+1
*/

function check(queen, row){ // 이전까지 둔 퀸의 위치 확인
    for(let i=0; i<row; i++){
        // 행 위치, 대각선 위치 체크
        // 1. queen[i]는 i위치에 queen이 있는 열 queen[row]는 row위치에 queen이 있는 열
        // 만약 i, row행에 같은 열에 퀸이 위치한다면, 세로로 배치가 2개이상 된거니 불가능

        // 2. queen[i]-queen[row]는 서로 다른 행에 위치한 각 열의 queen의 위치 차이값
        // 만약 열의 위치 차이값과 row-i인 행의 차이값과 같으면 대각선 위치
        // ex) (1,2) (3,4) 위치에 퀸이 있다면 x2-x1 === y2-y1 === 2
        // 따라서 이것도 불가
        if(queen[i] === queen[row] || Math.abs(queen[i]-queen[row]) === row-i){
            return false;
        }

    }
    return true;
}

function search(queen, row){
    const n = queen.length;
    let count = 0;

    if(n===row){ // 만약 체스판 최종길이와, 검색하고자하는 행 길이가 같을 때가 재귀 탈출조건 (마지막줄에는 무조건1개 놓을수있음)
        return 1;
    }

    for (let col=0; col<n; col++){ // 총 행만큼 반복하며 체스판을 훑음
        queen[row] = col; // row는 index이고, col은 value이다.

        if(check(queen,row)){// queen[row] = col로 현재 row,col에 퀸을 놨을 때, 이전 퀸 상태를 보며 여기 놓을수있는지를 확인 

            // 다음칸에서 놓을수있는 경우의 수 구함.
            // 현재 for문으로, row의 1~마지막까지 열을 한번씩 돌면서 row마다 얻을수있는 경우의 수를 얻고있음
            count += search(queen, row+1); 
        }
    }

    return count;
}

function solution(n){
    // 0으로 초기화된 n개 아이템을 가진 array생성
    const array = Array.from({length: n}, ()=>0);

    // 0번 행부터 시작
    return search(array, 0);
}

console.log(solution(4));