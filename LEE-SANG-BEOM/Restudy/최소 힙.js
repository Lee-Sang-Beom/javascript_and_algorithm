class MinHeap{
    constructor(){
        this.heap = [null];
    }

    swap(leftIndex, rightIndex){
        [this.heap[leftIndex], this.heap[rightIndex]] = [this.heap[rightIndex], this.heap[leftIndex]];
    }
    
    push(value){
        this.heap.push(value);
        let currentIndex = this.heap.length-1;
        let parentIndex = Math.floor(currentIndex/2);

        // 제일 작은 걸 위로 올려야 함
        while(parentIndex !==0 && this.heap[parentIndex] > value){
            this.swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex/2);
        }
    }

    pop(){
        const returnValue = this.heap[1];
        this.heap[1] = this.heap.pop();

        let currentIndex  = 1;
        let leftIndex = 2;
        let rightIndex = 3;

        // 위에서 아래로 내려가되, 작은게 위로올라와야함
        while(
            this.heap[leftIndex] && this.heap[currentIndex] > this.heap[leftIndex] ||
            this.heap[rightIndex] && this.heap[currentIndex] > this.heap[rightIndex]
        ){
            if(this.heap[leftIndex] === undefined){
                this.swap(currentIndex, rightIndex);
            } else if (this.heap[rightIndex] === undefined){
                this.swap(currentIndex, leftIndex);
            } else if(this.heap[leftIndex] > this.heap[rightIndex]){
                this.swap(currentIndex, rightIndex); // 오른쪽이 더 크니까, 오른쪽을 올리고, currentIndex가 내려감
                // currentIndex = rightIndex; // while문은 currentIndex가 가리키는 값을 보는거지 currentIndex 인덱스 값 자체가 굳이 변경될 필요는 없음
            } else if(this.heap[leftIndex] <= this.heap[rightIndex]){
                this.swap(currentIndex, leftIndex); // 왼쪽이 더 크니까, 왼쪽을 올리고, currentIndex가 내려감
                // currentIndex = leftIndex;
            }

            leftIndex = currentIndex*2;
            rightIndex = currentIndex*2+1;
            
        }

        return returnValue;
    }

}

const heap = new MinHeap();
const array = [];

heap.push(45);
heap.push(36);
heap.push(54);
heap.push(27);
heap.push(63);

console.log(heap.heap); // [null, 27, 36, 54, 45, 63]

array.push(heap.pop()); 
array.push(heap.pop()); 
array.push(heap.pop()); 
array.push(heap.pop());
array.push(heap.pop());
console.log(array); // [27, 36, 45, 54, 63]