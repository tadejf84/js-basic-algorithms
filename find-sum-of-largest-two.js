function findSumOfTwo(arr) {
  var i;
  var largest = 0;
  var second = 0;
  var n = arr.length;

  // CHECK IF LESS THAN 2 NUMBERS IN ARRAY
  if (n < 2) {
    return 'Your array is too short!';
  }

  for (i = 0; i < n; i++) {
    // TEST IF ARRAY ELEMENT IS A NUMBER
    if ( typeof arr[i] === 'number') {
      // GET LARGEST 2 NUMBERS
      if(arr[i] >= largest) {
        second = largest;
        largest = arr[i];
      } else if (arr[i] >= second) {
        second = arr[i];
      }
    }
  }

  return largest + second;

}

var para = document.querySelector('p');
// para.innerHTML = findSumOfTwo([1, 37, 33, 69, 6, 91, 8, 10]);
