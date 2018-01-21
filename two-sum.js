function twoSum(arr, target) {
  var i = 0;
  var j;
  var output = [];
  while (i < arr.length) {
    for (j = i+1; j < arr.length; j++) {
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
