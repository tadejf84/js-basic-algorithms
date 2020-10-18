/**
 * Find duplicate letters in a string
 * 
 * @param {string} str 
 * 
 * @returns {array} duplicate letters
 */
function findDuplicate(str) {

    if (str.length === 0) return 'You entered an empty string!';

    // Get only alphanumeric chars, to lower case, sort and split string to array
    const letter = str.replace(/[^a-z0-9]/gi,'')
                      .toLowerCase()
                      .split('')
                      .sort();

    // Loop through the arr and return duplicate values
    return letter.filter((el,i) => {
        return el === letter[i+1];
    });

}

