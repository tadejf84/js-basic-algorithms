/**
 * Selection sort algorithm - implementation with 2 for loops
 * 
 * @param {array} arr 
 * 
 * @returns {array} sorted array
 */
function selectionSort1(arr){
    let min;
    const len = arr.length;

    for(let i = 0; i < len; i++){
        min = i;

        for(let j = i + 1; j < len; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }

        // Swap elements in array
        [arr[i], arr[min]]  = [arr[i], arr[min]];
    }

    return arr;
}


/**
 * Selection sort algorithm - recursive implementation
 * 
 * @param {array} arr 
 * @param {number} startIndex
 * 
 * @returns {array} sorted array
 */
function selectionSort2(arr, startIndex = 0) {
    let minIndex;
    const len = arr.length;

    /*
    * While startIndex is lower than array length continue looping
    * If current iteration lower array value lower than lowest value
    * Swap lowest value with startIndex value -> lowest value goes to the beginning of the array
    */
    while (startIndex < len - 1) {
        minIndex = startIndex;

        for (let i = startIndex + 1; i < len; i++) {
            if(arr[i] < arr[minIndex]) {
                minIndex = i;
            }
        }

        // Swap elements in array
        [arr[startIndex], arr[minIndex]]  = [arr[minIndex], arr[startIndex]];
        startIndex++;

        // Recursively call the function
        selectionSort2(arr, startIndex);
    }

    return arr;
}

