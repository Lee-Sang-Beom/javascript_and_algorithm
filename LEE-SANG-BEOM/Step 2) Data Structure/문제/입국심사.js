
/*
    특정 값을 찾는 문제가 아니라, 최소 몇분에 모든 심사가 끝나는 지 확인
    이를 결정문제 = parametric search라 함

    답의 범위 : 1명 심사 당 1분~10억분

    면접관이 시간대비 몇명을 처리? => [시간 / 심사시간 = 심사관이 처리한 입국자 수] 
    => n값보다 심사관이 처리한 총 입국자 수가 작다면, mid분으로는 n명을 처리하기 힘드니 분을 올리고, 입국자가 n보다 크다면 반대로, 걸리는 시간을 조금 줄일 수 있기 때문에 분을 낮춰야 함


예시)
    mid = 30분 이라면 처리 속도가 7인 심사관은 4명, 처리 속도가 10인 심사관은 3명을 처리할 수 있습니다.
    /이 경우 그 합이 7이기 때문에 6명을 처리한다면 걸리는 시간을 조금 더 줄일 수 있지 않을까?로 생각할 수 있으니 right를 mid - 1로 줄입니다
*/
function solution(n, times) {
    // 우리는 최적의 "분"을 찾는 것임.
    // 따라서, 이진탐색으로 n명을 처리하기위해 left~right(최악)분 사이의 값을 찾는 것임
    // 이 값을 mid로 두고 mid를 조정해나가면서
    // 마지막에, mid분에 대한 sum값이 n과 같으면 


  let left = 1; // 한 명을 심사하는 데 걸리는 시간은 최소 1분 이상

  // 최악경우: n명의 사람을 가장 처리가 오래걸리는 김사관이 모두 보는 경우
  // 여기서는, 배열 안에 있는 원소를 꺼내는 ( ...times )와, 그 내용 중 max값을 구하는 함수 사용
  let right = Math.max(...times) * n; 

  while(left<=right){
    // mid : mid는 우리가 확인할 시간 값
    let mid = Math.floor((left+right)/2);

    // (시간 / 심사시간) = 입국자 수
    // 입국자 수의 모든 합 = 입국심사관이 처리한 모든 입국자 수
    const sum = times.reduce((prev,curr) => prev+Math.floor(mid/curr),0);

    // 우리의 목적은 [시간/심사시간]을 했을때 각 심사관이 처리한 사람이 n명이 되도록 맞춰야함 
    if(sum<n){ 
        // sum이 n보다 작다는 것은 
        // (left+right)/2 시간으로 입국자를 모두 처리한 경우, 처리된 입국자 수가 n보다 작았다. 
        // 이진탐색에서는 우리가 찾으려는값이 mid보다 오른쪽에 있다.(크다)

        left= mid + 1;
    } else{
        // (left+right)/2 시간으로 입국자를 모두 처리한 경우, 그 수가 n보다 크다면 right값이 너무커서 시간이 남았다는 소리임. 
        // 따라서, right값을 조금 줄여줌 

        // mid = 30분 이라면 처리 속도가 7인 심사관은 4명, 처리 속도가 10인 심사관은 3명을 처리할 수 있습니다.
        // 이 경우 그 합이 7이기 때문에 6명을 처리한다면 걸리는 시간을 조금 더 줄일 수 있지 않을까?로 생각할 수 있으니 right를 mid - 1로 줄입니다
        right= mid-1;

        // 또한 left<=right인 상황에서 mid가 결정되어 sum=n이 되었다면 탈출해야함
        // 여기서는 right를 낮추어 의도적으로 while문을 탈출하고
        // 변하지않은 left값을 return
    }
  }

  // left = right이고, mid값을 정확하게 구하면 정확한 sum(=n)이 도출
  // 이때 if-else문에서 sum=n이기 때문에 else로 가면서 right값이 줄어듬 (left는 불변)
  // 그렇기에 right말고 left인 최소값을 반환하는 것이 옳음 (right-1덕분에 while이 탈출되게 됨)
  return left;
}

console.log(solution(6, [7,10]));