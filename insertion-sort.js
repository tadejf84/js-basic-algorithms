function insertionSort(arr){
  var len = arr.length;
  var el, j;

  for(var i = 1; i < len; i++){
    el = arr[i];
    j = i;

    while(j > 0 && arr[j-1] > el){
      arr[j] = arr[j-1];
      j--;
   }

   arr[j] = el;
  }

  return arr;
}

var para = document.querySelector('p');
var example = [12, 11, 7, 13, 14, 16, 2, 22];
// para.innerHTML = insertionSort(example);
