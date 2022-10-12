const arr = [1, 1, 4, 5, 124, 500, 599, 1002, 4021, 8124];

function binarySearch(array, findValue){
    let left = 0;
    let right = arr.length-1;
    let mid = Math.floor((left+right)/2);

    while(left<=right){
        if(array[mid] < findValue){
            left = mid+1;
            
        } else if (array[mid] > findValue) {
            right = mid-1;

        } else {
            return mid;
        }

        mid = Math.floor((left+right)/2);
    }

    return -1;
}

console.log(binarySearch(arr, 5));