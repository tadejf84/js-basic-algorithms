function findPeaks(arr) {
  let peaks = [];

  for (let i = 0; i < arr.length; i++) {

    // find if first element in the array is larger then next one
    if (i === 0 && arr[i] >= arr[i+1] ) {
      peaks.push(arr[i]);
    }

    // find other peaks in the array
    if ( arr[i] >= arr[i+1] && arr[i] >= arr[i-1] ) {
      peaks.push(arr[i]);
    }

    // find if last element in the array is higher than previous one
    if (i === arr.length - 1 && arr[i] >= arr[i-1]  ) {
      peaks.push(arr[i]);
    }
    
  }
  return peaks;
}

