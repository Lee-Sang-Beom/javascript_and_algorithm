class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex != 0 && this.heap[parentIndex] < value) {
      const tmp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = tmp;
      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {

    // 루트정점만 남은경우
    if (this.heap.length === 2) return this.heap.pop();

    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();
    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    while (
      this.heap[currentIndex] < this.heap[leftIndex] ||
      this.heap[currentIndex] < this.heap[rightIndex]
    ) {
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;
        currentIndex = rightIndex;
      } else {
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

function solution(no, works) {
  const workHeap = new MaxHeap();
  let sum = 0;

  if (!works) {
    return 0;
  }

  if (!no) {
    for (let i = 1; i < works.length; i++) {
      sum += works[i] ** 2;
    }
    return sum;
  }

  for (let i = 0; i < works.length; i++) {
    workHeap.push(works[i]);
  }

  for (let i = 0; i < no; i++) {
    if (workHeap.heap[1] > 0) {
      workHeap.push(workHeap.pop() - 1);
    } else {
      workHeap.push(0);
    }
  }

  for (let i = 1; i < workHeap.heap.length; i++) {
    if (workHeap.heap[i] < 1) {
      continue;
    }
    sum += workHeap.heap[i] ** 2;
  }

  return sum;
}

solution(2, [3, 3, 3]);
