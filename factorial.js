/**
 * Calculate factorial
 * 
 * @param {number} n 
 * 
 * @returns {number} factorial
 */
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n-1);
    }
}