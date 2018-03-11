function twoSum(arr, target) {
  let i = 0, j,
      output = [];
  const len = arr.length;

  /*
  loop throught the whole array
  if current arr element value is equal to target value minus any of the element values of the rest of the array
  push both array elements into the output array
  */
  while (i < len) {
    for (j = i + 1; j < len; j++) {
      if (arr[j] == target - arr[i]) {
        output.push('[' + arr[i], arr[j] + ']');
      }
    }
    i++;
  }

  return output;
}

var para = document.querySelector('p');
var example = [12, 11, 7, 0, 3, 1, 2, 13, 14, -10, 47, 88, 113];
// para.innerHTML = twoSum(example, 3);
