/**
 * Check if one word is a permutation of another word
 * 
 * @param {string} str1 
 * @param {string} str2 
 * 
 * @returns {boolean}
 */
function isPermutation(str1, str2) {
    return str1.split('').sort().join('') === str2.split('').sort().join('');
}

