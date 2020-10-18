/**
 * Remove duplicate characters from string
 * 
 * @param {string} str 
 * 
 * @returns {string} unique chars
 */
function removeDuplicateLettersFromString(str) {
    let el,
        exists = {},
        output = [];

    // Only alpha numerical, to lowercase, split to array
    str = str.replace(/[^a-z0-9]/gi,'').toLowerCase().split('');

    // Push only unique chars to arr
    for (let i of str) {
        el = i;
        if(!exists[el]) {
            output.push(el);
            exists[el] = true;
        }
    }

    return output.join('');
}

