// selection sort with 2 loops
function selectionSort1(arr){
  let min;
  const len = arr.length;

  for(let i = 0; i < len; i++){
    min = i;
    for(let j = i + 1; j < len; j++){
       if(arr[j] < arr[min]){
          min = j;
       }
    }
    swap(arr, i, min);
  }
  return arr;
}

// selection sort recursive
function selectionSort2(arr, startIndex) {
  let minIndex;
  const len = arr.length;

  /* if startIndex is not defined, set it to 0 */
  if (startIndex == null) { startIndex = 0 }

  /*
  while startIndex is lower than array length
  loop through array
  if current iteration lower array value lower than lowest value
  swap lowest value with startIndex value -> lowest value goes to the beginning of the array
  */
  while (startIndex < len - 1) {
    minIndex = startIndex;
    for (let i = startIndex + 1; i < len; i++) {
      if(arr[i] < arr[minIndex]) {
        minIndex = i;
      }
    }
    swap(arr, startIndex, minIndex);
    startIndex++;
    selectionSort2(arr, startIndex);
  }

  return arr;
}

// helper function swap
function swap(arr, i, min) {
  var temp = arr[i];
  arr[i] = arr[min];
  arr[min] = temp;
}

var para = document.querySelector('p');
var example = [12, 11, 7, 13, 14, 16, 2, 22];
// para.innerHTML = selectionSort1(example);
// para.innerHTML = selectionSort2(example);
