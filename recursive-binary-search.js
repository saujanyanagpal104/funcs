// Binary search can be used only on sorted arrays

let sortedArray = [1, 11, 111, 123, 156, 178, 234, 239, 345, 456, 654, 798, 1024];

function recursiveBinarySearch(arr, x, low, high) {
    if(low <= high) {
        let mid = Math.floor((low + high)/2);

        if(arr[mid] === x) {
            return mid;
        } else if(x > arr[mid]) {
            return recursiveBinarySearch(arr, x, mid + 1, high);
        } else {
            return recursiveBinarySearch(arr, x, low, mid - 1);
        }
    }
    return -1;
}

console.log(recursiveBinarySearch(sortedArray, 234, 0, (sortedArray.length - 1)));