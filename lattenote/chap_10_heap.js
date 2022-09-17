const Index = () => {
  return (
    <>
      <p>test</p>
    </>
  );
};

export default Index;

// 힙

/*
  [우선순위 큐]
  - 일반적인 FIFO인 큐와 달리 우선순위가 높은 요소가 먼저 나가는 큐.

  따라서, 자료구조가 아닌 개념적으로 접근해야한다.

  [힙]
  1. 이진 트리 형태를 가진다.
  2. 우선순위가 높은 요소가 먼저 나가기 위해 요소가 삽입, 삭제 될 때 바로 정렬되는 특징.

  => 우선순위 큐 != 힙

  [힙의 특징]
  1. 우선순위가 높은 요소가 먼저 나가는 특징.
  2. 루트가 가장 큰 값이 되는 최대 힙, 루트가 가장 작은 값이 되는 최소 힙이 있다.
  3. 자바스크립트에선 직접 구현.

  [힙 요소 추가 / 제거 알고리즘] 
  1. 완전 이진트리 높이 : log N => 시간복잡도 : O(log N)
  */

// 힙 요소 추가 구현

class MaxHeap{
    constructor(){
        this.heap = [null];
    }

    push(value){
        this.heap.push(value);
        let currentIndex = this.heap.length-1;
        let parentIndex = Math.floor(currentIndex / 2);

        while (parentIndex !== 0 && this.heap[parentIndex] < value){
            const temp = this.heap[parentIndex];
            this.heap[parentIndex] = value;
            this.heap[currentIndex] = temp;

            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex / 2);
        }
    }

    pop(){
        const returnValue = this.heap[1];
        this.heap[1] = this.heap.pop();

        let currentIndex = 1;
        let leftIndex = 2;
        let rightIndex = 3;
        while(
            this.heap[currentIndex] < this.heap[leftIndex] ||
            this.heap[currentIndex] < this.heap[rightIndex]
        ){
            if(this.heap[leftIndex] < this.heap[rightIndex]){
                const temp = this.heap[currentIndex];
                this.heap[currentIndex] = this.heap[rightIndex];
                this.heap[rightIndex] = temp;
                currentIndex = rightIndex;
            }else{
                const temp = this.heap[currentIndex];
                this.heap[currentIndex] = this.heap[leftIndex];
                this.heap[leftIndex] = temp;
                currentIndex = leftIndex;
            }
            leftIndex = currentIndex * 2;
            rightIndex = currentIndex * 2 + 1;
        }
        return returnValue;
    }
}

const heap = new MaxHeap();
heap.push(45);
heap.push(46);
heap.push(54);
heap.push(27);
heap.push(63);
console.log(heap.heap);

const array = [];
array.push(heap.pop());
array.push(heap.pop());
array.push(heap.pop());
array.push(heap.pop());
array.push(heap.pop());
console.log(array);

