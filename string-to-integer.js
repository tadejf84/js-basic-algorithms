/**
 * Transform string to integer
 * 
 * @param {string} str
 * 
 * @returns {number} 
 */
function stringToInt(str) {
    let sum = 0;
    const arr = str.split('');

    arr.map((currElement, index) => {
        sum += currElement * Math.pow(10, arr.length - index - 1);
    });

    return sum;
}
