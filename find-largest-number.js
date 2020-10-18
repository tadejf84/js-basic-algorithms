/**
 * Find max value in array
 * 
 * @param {array} arr
 * 
 * @returns {number} max 
 */
function findMax(arr) {

    // Math max and spread operator method
    return Math.max(...arr);

    // Map method 
    // let max = 0;
    // arr.map( num => {
    //     if (num > max){
    //         max = num;
    //     }
    // });
    // return max;

}
