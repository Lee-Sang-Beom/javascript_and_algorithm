const Index = () => {
    return (
      <>
        <p>test</p>
      </>
    );
  };
  
  export default Index;
// 최대 힙 구현

class MaxHeap{
    constructor(){
        this.heap = [null];
    }

    push(value){
        this.heap.push(value);
        let currentIndex = this.heap.length - 1;
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
        if(this.heap.length === 2) return this.heap.pop();

        const returnValue = this.heap[1];
        this.heap[1] = this.heap.pop();

        let currentIndex = 1;
        let leftIndex = 2;
        let rightIndex = 3;
        while(this.heap[currentIndex] < this.heap[leftIndex] ||
            this.heap[currentIndex] < this.heap[rightIndex]){
            if (this.heap[leftIndex] < this.heap[rightIndex]){
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

// solution 함수 구현

function solution(no, works){
    if (works.reduce((a,b) => a+ b) <= no){
        return 0;
    }

    const heap = new MaxHeap();
    for (const work of works){
        heap.push(work);
    }

    for (let i = 0; i < no; i += 1){
        heap.push(heap.pop() - 1);
    }
    return heap.heap.reduce((a,b) => a+b * b);
}
const no = 4
const works = [4,3,3];

console.log(solution(no, works));