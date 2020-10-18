/**
 * Find missing number with sorting
 * 
 * @param {array} arr 
 * 
 * @returns {number} missing num
 */
function findMissingNum1(arr) {

    // Sort the array
    const sorted = arr.sort();
    const n = arr.length + 1;

    // Return the missing number in the arr
    for (let i = 0; i < n; i++) {
        if(sorted[i] + 2  === sorted[i+1]) {
            return sorted[i+1] - 1;
        }
    }
}


/**
 * Find missing number without sorting
 * 
 * @param {array} arr 
 * 
 * @returns {number} missing num
 */
function findMissingNum2(arr) {
    const n = arr.length + 1;

    // Formula for expected sum of arr length + 1
    const expectedSum = n * (n + 1) / 2;

    // Get actual sum of all elements in the arr
    const actualSum = arr.reduce((a, b) => {
        return a + b;
    }, 0);

    return expectedSum - actualSum;
}

