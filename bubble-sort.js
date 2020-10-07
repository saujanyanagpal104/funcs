const sortedArray = [43, 12, 123, 67, 655, 23, 323, 1255, 12312, 898, 909];

function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let swap = false;

        for(let j = 0; j < arr.length - i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swap = true;
            }
        }

        if(swap === false) {
            break;
        }
    }
}


bubbleSort(sortedArray);

console.log(sortedArray)
