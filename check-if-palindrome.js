/**
 * Check if a word is a palindrom
 * Palindrom is a word, phrase, or sequence that reads the same backwards as forwards
 * 
 * @param {string} str 
 * 
 * @returns {boolean}
 */
function checkIfPalindrome(str) {
    let strSplit = [],
        strReverse = [];

    if ( str.length < 1 ) return 'Invalid input!';
    if ( str.length === 1) return true;

    // Get only alphanumeric chars, to lower case and split string to array
    str = str.replace(/[^a-z0-9]/gi,'').toLowerCase();
    strSplit = str.split('');

    // Reverse string
    strReverse = strSplit.reverse();

    // Compare the two strings
    return str === strReverse.join('') ? true : false;
}

