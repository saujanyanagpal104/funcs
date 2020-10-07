// Binary search can be used only on sorted arrays

let sortedArray = [1, 11, 111, 123, 156, 178, 234, 239, 345, 456, 654, 798, 1024];

function binarySearch(arr, x) {
    let low = 0;
    let high = arr.length - 1;

    while(low <= high) {
        let mid = Math.floor((low + high)/2);

        if(arr[mid] === x) {
            return mid;
        } else if(x > arr[mid]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}

console.log(binarySearch(sortedArray, 123))
console.log(binarySearch(sortedArray, 13))