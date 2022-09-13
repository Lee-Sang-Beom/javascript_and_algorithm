// 이진 탐색 : 정렬된 요소를 반씩 제외하며 찾는 알고리즘.
// O(log n)만큼 시간복잡도 걸림

/*
 - 반드시 정렬되어있어야함
 - 배열 혹은 이진트리를 이용해 구현할 수 있음
*/

// 배열을 이용한 구현방법 : 중간에 요소를 추가/삭제하면 선형시간이 걸린다는 단점
{
    // coding test 시 해당방법 많이사용
    const array= [1,1,5,124,400,599,1004,2076,8712];

    function binarySearch(array, findValue){
        let left = 0;
        let rignt = array.length -1;
        let mid = Math.floor((left+right)/2);

        while (left <= right){
            if (array[mid] < findValue){
                left = mid+1;
            } else if(array[mid] > findValue){
                right = mid-1;
            } else{
                return mid;
            }

            mid = Math.floor((left+right)/2);
        }

        // 요소를 찾지 못하는 경우
        return -1;
    }
}

// 이진 탐색 트리 이용 : 최악의 경우 한쪽으로 편향된 트리가 될 수 있으므로, 순차 탐색과 동일한 시간복잡도를 갖는다.
{

}