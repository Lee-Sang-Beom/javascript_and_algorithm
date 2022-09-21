const Index = () => {
  return (
    <>
      <p>test</p>
    </>
  );
};

export default Index;

/*

[전략]
1. 최대한 적은 비용으로 가지치기
=> 1차원 배열 사용.
예) queen[2] = 1
=> 두 번째 줄, 첫 번째 칸.

2. 1차원 배열 사용 시 다음 조건.
- 한 index에 여러 value 둘 수 없음.
=> 행 자동 가지치기 된다.
- index 같으면 가지치기.
- 행, 열에 대한 차가 같으면 대각선에 있기에 가지치기.

*/

// [구현]

// 퀸 둘 수 있는지 확인하는 함수.
function check(queen, row) {
  for (let i = 0; i < row; i += 1) {
    // queen[i] === queen[row] => 행 체크
    // Math.abs(queen[i] - queen[row]) === row - i)  => 대각선 체크
    // Math.abs() 함수는 주어진 숫자의 절댓값을 반환한다.
    if (
      queen[i] === queen[row] ||
      Math.abs(queen[i] - queen[row]) === row - i
    ) {
      return false;
    }
  }
  // 모두 통과 시 true 반환
  return true;
}

// 한 줄 씩 탐색하는 함수.
function search(queen, row) {
  const n = queen.length;
  let count = 0;

  if (n === row) {
    // 재귀 함수 탈출 조건.
    return 1;
  }

  for (let col = 0; col < n; col += 1) {
    queen[row] = col;
    if (check(queen, row)) {
      count += search(queen, row + 1); // 다음 행으로 이동.
    }
  }
  return count;
}

function solution(n) {
  // 미리 n개 만큼의 배열을 초기화, 0번 행부터 시작.
  return search(
    Array.from({ length: n }, () => 0),
    0
  );
}

//const n = 4;
//console.log(solution(n));
