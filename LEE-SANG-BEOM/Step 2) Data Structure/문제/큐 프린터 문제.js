class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class Queue{
    constructor(){
        this.head=null;
        this.tail=null;
        this.size=0;
    }

    enqueue(value){
        const newNode = new Node(value);
        if(this.head===null){
            this.head=this.tail=newNode;
        } else{
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    dequeue(){
        const value = this.head.value;
        this.head=this.head.next;
        this.size--;
        return value;
    }

    peek(){
        return this.head.value;
    }

   
}

function solution(priorities, location){
    const queue = new Queue();
    for (let i=0; i<priorities.length; i++){
        // 우선순위와 index를 함께넣음. 각 요소가 어느 index인지 알아야함
        queue.enqueue([priorities[i],i]);
    }

    priorities.sort((a,b)=>b-a);
    let count=0;
    while(queue.size){
        const currentValue = queue.peek();
        // 인쇄대기목록에서 중요도가 높은 게 있으면, 제일 높은것을 dequeue하게 됨.
        // priorities[count]에서, count가 계속 증가하는 이유는, 가장 큰 값이 dequeue되었으니, 우측으로 계속 이동해주는 것임
        if(currentValue[0] < priorities[count]){
            queue.enqueue(queue.dequeue());
        } else{
            const value=queue.dequeue(); // 가장 큰 값이 queue에서 빠져나옴 = 이 값은 priorities[count]와 같음 (제일큰값)
            count+=1; // 제일 큰 값을 비교하였고, 빼왔으니 count+=1

            // [ 1,1,3,1,1,1] 인 경우 같은 1을 비교해야함. 그 방법이, location과 enqueueu했던 index를 비교하는 것임
            // location: priorities 배열에서 어느위치의 값을 출력하려하는것인가?
            // value[1] : enqueue를 순서대로했을때, 0부터 시작해 넣은 index (이것은 location과 같음)
            if(location === value[1]){
                return count;
            }
        }
    }
}


console.log(solution([2,1,3,2],2));