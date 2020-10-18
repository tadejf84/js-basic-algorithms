/**
 * Reverse a string
 * 
 * @param {string} str
 * 
 * @returns {string} reversed 
 */
function stringReverse(str) {
    let output = '';
    const len = str.length;

    // Initial check of user input
    if (typeof str !== 'string' ) return 'Invalid input! Not a string.';
    if (!str) return 'Invalid input! Empty string.';
    if (len < 2 ) return str;

    // Loop through in opposite direction
    for (var i = len - 1; i >= 0; i--) {
        output += str[i];
    }

    return output;
}

