const Index = () => {
    return (
      <>
        <p>test</p>
      </>
    );
  };
  
  export default Index;
  
  /*
    로그 시간 = 이진 탐색
    times -> 선형 로그 시간으로 충분히 가능.
  
    우리는 특정 값을 찾는 것이 아님.
    최소 몇 분에 모든 심사가 끝나는가?
    이것을 "결정 문제" = 파라매트릭 서치 (Parametric Search)
  
    면접관들이 몇 명을 처리?
    처리 가능한 입국자가 n보다 작을 경우 분을 올려야 함.
                        n보다 클 경우 분을 낮춰야 함.
  
    따라서, 면접관이 시간 대비 몇 명을 처리할 수 있는가?
  
    시간 / 심사시간 = 심사관 당 처리 가능한 입국자 수
  
    */
  
  function solution(n, times) {
    const sortedTimes = times.sort((a, b) => a - b); // O(nlogn)
    let left = 1; // 남은 시간
    let right = sortedTimes[sortedTimes.length - 1] * n; // 정렬된 시간의 제일 마지막 * n
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      // sum([시간 / 심사시간])
      const sum = times.reduce((acc, time) => acc + Math.floor(mid / time), 0);
      // Math.floor (소수점 이하 버림 (내림))
      if (sum < n) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return left;
  }
  
  const n = 6;
  const times = [7, 10];
  console.log(solution(n, times));
  