/**
 * Swap a number
 * 
 * @param {number} a 
 * @param {number} b 
 * 
 * @returns {array} swapped numbers
 */
function swapNum(a, b) {

    // With temp
    // let temp;
    // temp = a;
    // a = b;
    // b = temp;

    // Without temp
    // b = b - a;
    // a = a + b;
    // b = a - b;

    // ES6 deconstructuring
    [a,b] = [b,a];

    return [a, b];
}


