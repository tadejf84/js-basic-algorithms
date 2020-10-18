/**
 * Find peaks in an array
 * 
 * @param {array} arr 
 * 
 * @returns {array} peaks
 */
function findPeaks(arr) {
    let peaks = [];

    for (let i = 0; i < arr.length; i++) {

        // Find if first element in the array is larger then next one
        if (i === 0 && arr[i] >= arr[i+1] ) {
            peaks.push(arr[i]);
        }

        // Find other peaks in the array
        if ( arr[i] >= arr[i+1] && arr[i] >= arr[i-1] ) {
            peaks.push(arr[i]);
        }

        // Find if last element in the array is higher than previous one
        if (i === arr.length - 1 && arr[i] >= arr[i-1]  ) {
            peaks.push(arr[i]);
        }
    }

    return peaks;
}

