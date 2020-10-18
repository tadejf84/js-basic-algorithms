/**
 * Bubble sort algorithm
 * 
 * @param {array} arr 
 * 
 * @returns {array} sorted array
 */
function bubbleSort(arr){
    const len = arr.length;

    if(len === 0) return 'Array is empty!';
    if(len === 1) return arr;

    for (let i = len - 1; i >= 0; i--){
        for(let j = 0; j <= i; j++) {
            if(arr[j-1] > arr[j]) {
                // Swap elements with arr deconstructuring
                [arr[j-1], arr[j]]  = [arr[j], arr[j-1]];
            }
        }
    }

    return arr;
}



