/**
 * Split array into chunks
 * 
 * @param {array} arr 
 * @param {number} len 
 * 
 * @returns {array} chunks
 */
function arrChunk(arr, len) {
    const chunkedArr = [];
    let i = 0;

    // Slice the array into chunks
    while(i < arr.length) {
        chunkedArr.push(arr.slice(i, i + len));
        i += len;
    }

    return chunkedArr;
}


