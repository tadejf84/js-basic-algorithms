/**
 * Find sum of the two largest numbers in array
 * 
 * @param {array} arr 
 * 
 * @returns {number} sum of two
 */
function findSumOfTwo(arr) {
    let largest = 0,
        second = 0;
    const len = arr.length;

    if (len < 2) { return 'Your array is too short!'; }

    for (let el of arr) {

        // Check if arr element is a number
        if (typeof el === 'number') {

            // Get 2 largest numbers
            if (el >= largest) {
                second = largest;
                largest = el;
            } else if (el >= second) {
                second = el;
            } else {
                continue;
            }

        }

    }

    return largest + second;
}
