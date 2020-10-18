/**
 * Find longest word
 * 
 * @param {string} str 
 * 
 * @returns {array} longest words
 */
function longestWord(str) {

    // Filter array for alpha numeric characters only
    const words = str.toLowerCase().match(/[a-z0-9]+/g);

    // Sort words by length
    const sorted = words.sort((a,b) => {
        return b.length - a.length;
    });

    // Return one or more words with most characters
    const longestWords = sorted.filter((word) => {
        return word.length === sorted[0].length;
    });

    return longestWords;
}

