// FIND MISSING NUMBER WITH SORTING
function findMissingNum1(arr) {
  var n = arr.length + 1;

  // FUNCTION MERGE SORT DEFINED IN ANOTHER JS FILE
  var sorted = mergeSort(arr);
  var i;

  for (i = 0; i < n; i++) {
    if(sorted[i] + 2 === sorted[i+1]) {
      return sorted[i+1] - 1;
    }
  }
}

// FIND MISSING NUMBER WITHOUT SORTING
function findMissingNum2(arr) {
  var i;
  var n = arr.length + 1;
  var actualSum = 0;

  // FORMULA FOR EXPECTED SUM OF ARRAY LENGTH + 1
  var expectedSum = n * (n+1) / 2;

  // GET ACTUAL SUM OF ALL ARRAY ELEMENTS
  for (i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }

  return expectedSum - actualSum;

}

var para = document.querySelector('p');
// para.innerHTML = findMissingNum1([1,2,4,3,5,6,9,8,10]);
// para.innerHTML = findMissingNum2([1,2,4,3,5,6,9,8,10]);
