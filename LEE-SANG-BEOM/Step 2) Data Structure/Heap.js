/*
 - 힙 : 우선순위 큐를 구현하기 위해 가장 적합한 개념
    * 이진 트리 형태를 가지며, 우선순위가 높은 요소가 먼저 나가기 위해,
      요소가 삽입, 삭제될 때 바로 정렬되는 특징을 가진다.

    * 루트가 가장 큰 값이되는 최대 힙과 루트가 가장 작은 값이되는 최소 힙이 있다.
 
 - 우선순위 큐 : FIFO인 큐와 달리, 우선 순위가 높은 요소가 먼저 나가는 큐
*/

class MaxHeap {
  constructor() {
    // 0번 인덱스는 편의를 위해, 0으로 비워둠
    this.heap = [null];
  }

  /* 
    1. 최초 요소 추가는 1번째 인덱스에 요소추가
    2. 요소 추가를 이어감
    3. 추가한 요소가, 부모 요소보다 큰 경우 부모요소와 위치교체
    4. 3번 과정을 추가한노드가 루트가 되기까지나, 부모값이 추가한값보다 큰 경우까지 반복
  */
  push(value) {
    // 추가는 항상 마지막에
    this.heap.push(value);

    let currentIndex = this.heap.length - 1; // 현재 힙이 가지는 마지막 인덱스 위치
    let parentIndex = Math.floor(currentIndex / 2); // 마지막 노드의 부모는 현재 자식 인덱스에서 2를 나누고 소수점을 제외한 값

    while (parentIndex != 0 && this.heap[parentIndex] < value) {
      // 추적하는 부모 인덱스가 0이 아니고, (0이면 루트가 아님)
      // 최대 힙은 최대값이 루트로 이동해야 하니, value값이 부모값보다 클 동안 while문을 돌면서 위로 올라가야 함

      const tmp = this.heap[parentIndex];

      // 값의 교체 : 맨 끝에 추가된 값이 부모의 위치로 이동하며, 값이 swap됨
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = tmp;

      /*
        while 반복을 위해, 현재 인덱스위치를 갱신
         - 힙의 기존 부모 인덱스의 value 값이 내려갔고, 새로운 인덱스의 value 값이 올라갔음.
         - 다음 반복에서 위와 같은 반복을 수행하도록, currentIndex를 올려주고 parentIndex도 새 값으로 올려줌
         - 이 과정을, 부모의 값이 새로운 값보다 큰 환경이 유효할동안만 반복 
      */
      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  /*
  1. 루트 정점 제거
  2. 마지막 정점을 루트로 이동
  3. 자식정점 (왼/오른쪽) 과 비교
  4. 둘 중 우선순위가 더 높은 자식정점으로 이동
  */
  pop() {

    // 루트 정점만 남은경우
    if (this.heap.length === 2) return this.heap.pop();
    
    // 최대 힙에서, 항상 반환하는 값은 루트 노드임
    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    // 루트 인덱스부터 시작
    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    // 마지막노드가 최대힙으로 이동한 후, 반복을 통해 마지막노드를 힙 배열의 알맞은 위치로 이동시키는 작업
    while (
      this.heap[currentIndex] < this.heap[leftIndex] ||
      this.heap[currentIndex] < this.heap[rightIndex]
    ) {
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        // 오른쪽 값이 더 크니 (우선순위가 높으니), 오른쪽 자식노드와 현재 위치한 노드를 변경
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;

        // 현재 이동이 완료된 마지막노드의 위치를 저장
        currentIndex = rightIndex;
      } else {
        // 왼쪽 값이 더 크니 (우선순위가 높으니), 왼쪽 자식노드와 현재 위치한 노드를 변경
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = temp;

        // 현재 이동이 완료된 마지막노드의 위치를 저장
        currentIndex = leftIndex;
      }

      // 이동을 완료한 위치의 자식노드 인덱스 계산
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  }
}

const heap = new MaxHeap();
const array = [];

heap.push(45);
heap.push(36);
heap.push(54);
heap.push(27);
heap.push(63);
console.log(heap.heap); // [ null, 63, 54, 45, 27, 36 ]

array.push(heap.pop()); // 63
array.push(heap.pop()); // 54
array.push(heap.pop()); // 45
array.push(heap.pop()); // 36
array.push(heap.pop()); // 27

console.log(array); // [ 63, 54, 45, 36, 27 ]