let testArray = [12, 112, 434, 54, 64565, 1, 2, 3, 645, 64, 43, 32];

function linearSearch(arr, x) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === x) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch(testArray, 1));
console.log(linearSearch(testArray, 122));