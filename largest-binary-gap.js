/**
 * Find largest gap in a binary number
 * Longest sequence of 0 between 1
 * 
 * @param {number} num 
 * 
 * @returns {number} gap
 */
function largestBinaryGap(num) {

    // Convert number into binary
    const binary = Math.abs(num).toString(2);

    let finalMaxGap = 0,
        curMaxGap;

    /*
    * Loop through binary
    * If number is 0 increase current gap
    * If number is 1 compare current gap with previous, reset current max gap
    */
    for (let digit of binary) {
        if (digit === '0') {
            curMaxGap++;
        } else {
            if (curMaxGap > finalMaxGap) {
                finalMaxGap = curMaxGap;
            }
            curMaxGap = 0;
        }
    }

    return finalMaxGap;
}
