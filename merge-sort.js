let unsortedArray = [23, 45, 21, 12, 56, 65, 22, 123, 456, 11, 112, 134, 8, 0, 6, 61, 63];

function mergeSort(arr) {
    if(arr.length > 1) {
        let mid = Math.floor(arr.length/2);
        let leftArr = arr.slice(0, mid);
        let rigthArr = arr.slice(mid, arr.length);

        mergeSort(leftArr);
        mergeSort(rigthArr);

        let i = 0;
        let j = 0;
        let k = 0;

        while(i < leftArr.length && j < rigthArr.length) {
            if(leftArr[i] < rigthArr[j]) {
                arr[k] = leftArr[i];
                i++;
            } else {
                arr[k] = rigthArr[j];
                j++;
            }
            k++;
        }

        while(i < leftArr.length) {
            arr[k] = leftArr[i];
            i++;
            k++;
        }

        while(j < rigthArr.length) {
            arr[k] = rigthArr[j];
            j++;
            k++;
        }
    }
}

mergeSort(unsortedArray);

console.log('result:', unsortedArray)