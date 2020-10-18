/**
 * Find first non repeating character in a string
 * 
 * @param {string} str 
 * 
 * @returns {string} char
 */
function firstNonRepeatingChar(str) {
    let char, 
        count = {};

    // Loop through string arr and increment by 1 if exists, else init value to 1
    for (let i in str) {
        char = str[i];
        if (!count[char]) {
            count[char] = 1;
        } else {
            count[char]++;
        }
    }

    // If count is 1 return the first not repeating char
    for (let j in count) {
        if (count[j] === 1) {
            return j;
        }
    }
}

