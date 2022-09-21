class MaxHeap{
    constructor(){
        this.heap = [null];
    }

    swap(leftIndex, rightIndex){
        [this.heap[leftIndex], this.heap[rightIndex]] = [this.heap[rightIndex], this.heap[leftIndex]] 
    }

    push(value){
        this.heap.push(value);
        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor(currentIndex/2);
        
        // 올려주는 작업 (값이 제일 큰 것이 root!)
        while(parentIndex !== 0 && this.heap[parentIndex] < value){
            this.swap(parentIndex, currentIndex);
            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex/2);
        }
    }

    pop(){

        // 비었다?
        if(this.heap.length===1) return
        
        // 만약 2개다? : 반환하고 바로 끝
        if (this.heap.length===2) return this.heap.pop(); 

        // root 반환
        const returnValue = this.heap[1];
        this.heap[1] = this.heap.pop();  // heap[1] 반환 후, 그자리에는 끝의 값이 온다

        // 이제, heap[1]의 값을 내려야됨 : 최대힙은 루트가 제일큼. 따라서, 아래를 보며 더 큰 값으로 내려간다.
        let currentIndex = 1;
        let leftIndex = 2;
        let rightIndex = 3;

        while(
            this.heap[leftIndex] && this.heap[currentIndex] < this.heap[leftIndex] ||
            this.heap[rightIndex] && this.heap[currentIndex] < this.heap[rightIndex]
        ){
            if(this.heap[leftIndex] === undefined){
                this.swap(currentIndex, rightIndex);
            } else if (this.heap[rightIndex] === undefined){
                this.swap(currentIndex, leftIndex);
            } else if(this.heap[leftIndex] < this.heap[rightIndex]){
                this.swap(currentIndex, rightIndex); // 오른쪽이 더 크니까, 오른쪽을 올리고, currentIndex가 내려갊
                currentIndex = rightIndex; // swap으로 값 자체는 바꿨지만, 인덱스는 바뀌지 않았으니 수행
            } else if(this.heap[leftIndex] >= this.heap[rightIndex]){
                this.swap(currentIndex, leftIndex); // 왼쪽이 더 크니까, 왼쪽을 올리고, currentIndex가 내려갊
                currentIndex = leftIndex;
            }
            leftIndex = currentIndex*2;
            rightIndex = currentIndex*2+1;
            
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