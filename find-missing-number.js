/*
* find missing number with sorting 
*/
function findMissingNum1(arr) {

  // sort the array
  const sorted = arr.sort();
  const n = arr.length + 1;

  // return the missing number in the arr
  for (let i = 0; i < n; i++) {
    if(sorted[i] + 2  === sorted[i+1]) {
      return sorted[i+1] - 1;
    }
  }
}

/* 
* find missing number without sorting 
*/
function findMissingNum2(arr) {
  const n = arr.length + 1;

  // formula for expected sum of arr length + 1
  const expectedSum = n * (n + 1) / 2;

  // get actual sum of all elements in the arr
  const actualSum = arr.reduce((a, b) => {
    return a + b;
  }, 0);

  return expectedSum - actualSum;
}

