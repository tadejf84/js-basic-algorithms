/**
 * Shuffle words in a sentence
 * 
 * @param {string} str
 * 
 * @returns {string} shuffled 
 */
function wordShuffle(str) {
    let wordShuffle = []
        words = [];

    // Split string into words array
    words = str.split(' ');

    // Loop trough the words array in the opposite direction and push into wordShuffle array
    for (let i = words.length; i >= 0; i--) {
        wordShuffle.push(words[i]);
    }

    return wordShuffle.join(' ');
}

