/*
* find sum of two largest numbers in array
*/
function findSumOfTwo(arr) {
  let largest = 0,
      second = 0;
  const len = arr.length;

  // check initial input
  if (len < 2) { return 'Your array is too short!'; }

  for (let el of arr) {
    // check if arr element is a number
    if (typeof el === 'number') {
      // get 2 largest numbers
      if (el >= largest) {
        second = largest;
        largest = el;
      } else if (el >= second) {
        second = el;
      } else {
        continue;
      }
    }
  }
  return largest + second;
}
