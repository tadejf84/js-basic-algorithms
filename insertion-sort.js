/*
* insertion sort array
*/
function insertionSort(arr){

  arr.forEach( (el, i) => {
    while(i > 0 && arr[i - 1] > el){
      arr[i] = arr[i - 1];
      i--;
    }
    arr[i] = el;
  });

  return arr;
}

