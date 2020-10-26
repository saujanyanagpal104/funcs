// Quick Sort (last element as pivot)

let testArr = [12, 43, 1, 3, 44, 32, 23, 12, 21, 44, 15, 78, 4, 56];

function quickSort(arr, low, high) {
    if(low < high) {
        let pi = partition(arr, low, high);

        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;

    for(let j = low; j <= high; j++) {
        if(arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    [arr[i+1], arr[high]] = [arr[high], arr[i + 1]]
    return i + 1;
}

quickSort(testArr, 0, (testArr.length - 1));

console.log(testArr, 'test')