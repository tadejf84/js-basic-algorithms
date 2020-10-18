/**
 * Find all permutations of a string
 * 
 * @param {string} str 
 * 
 * @returns {array} permutations
 */
function findAllPermutations(str) {
    let permutations = [];

    if (str.length === 0) return 'You entered an empty string!';
    if (str.length === 1) return str;

    // Get only alphanumeric chars, to lower case and split string to array
    const arr = str.replace(/[^a-z0-9]/gi,'')
                    .toLowerCase()
                    .split('');

    arr.forEach( (el, index) => {

        // For each iteration create a new instance of the array
        const copyArr = Object.create(arr);

        // Pick one element and remove it from the array
        const picked = copyArr.splice(index, 1);

        // Recursively permutate the rest
        const rest = findAllPermutations(copyArr.join(''));

        // Concatenate picked with rest and push in the new array
        for (let el of rest) {
            const concatenated = picked.concat(el);
            permutations.push(concatenated.join(''));
        }

    });

    return permutations;
}
