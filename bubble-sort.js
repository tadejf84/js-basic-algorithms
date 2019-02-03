function bubbleSort(arr){
  const len = arr.length;

  for (let i = len - 1; i >= 0; i--){
    for(let j = 0; j <= i; j++) {
      if(arr[j-1] > arr[j]) {
        swap(arr, j-1, j);
      }
    }
  }

  return arr;
}

// helper function
function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

