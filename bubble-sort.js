function bubbleSort(arr){
  var len = arr.length;
  for (let i = len - 1; i >= 0; i--){
    for(let j = 0; j <= i; j++) {
      if(arr[j-1] > arr[j]) {
        let temp = arr[j-1];
        arr[j-1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

var para = document.querySelector('p');
var example = [12, 11, 7, 13, 14, 16, 2, 22];
// para.innerHTML = bubbleSort(example);
