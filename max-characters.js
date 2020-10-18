/**
 * Get character with most occurences in a string
 * 
 * @param {string} str 
 * 
 * @returns {array} character and count of occurences
 */
function maxChar(str){
    let charCount = {},
        maxCount = 0,
        maxIndex;

    // String to lower case, only alphanumerical, split to array
    const strArr = str.toLowerCase()
                      .replace(/[^a-z0-9]/gi,'')
                      .split('');

    // Count chars
    for(let char of strArr) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    // Find highest char count
    for (let char in charCount) {
        if (charCount[char] > maxCount) {
            maxCount = charCount[char];
            maxIndex = char;
        }
    }

    return [maxIndex, maxCount];
}

