/**
 * Find greatest common divisor of two numbers
 * 
 * @param {number} num1 
 * @param {number} num2 
 * 
 * @returns {number} common divisor
 */
function greatestCommonDiv(num1, num2) {
    let div = 0;

    // Check if input not a number
    if (typeof num1 !== 'number' || typeof num2 !== 'number') return 'Input is not a number!';

    // Check if any of the inputs is equal to 0
    if (num1 === 0 || num2 === 0) { 
        return num1 >= num2 ? num1 : num2;
    }

    for (let i = 0; i <= num1; i++) {
        if (num1%i === 0 && num2%i === 0) {
            div = i;
        }
    }
    
    return div;
}

