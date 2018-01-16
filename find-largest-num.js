function findMax(arr) {
  var max = 0;

  // with a for loop
  // for (var i = 0; i < arr.length; i++) {
  //   if (arr[i] > max) {
  //     max = arr[i];
  //   }
  // }

  // math.max method and spread(...)
  // return Math.max(...arr);

  // with the map method
  arr.map(function(num){
    if (num > max){
      max = num;
    }
  });

  return max;

}

var para = document.querySelector('p');

var exampleArr = [6, 7, 111, 12177, 227, 13, 1890, 11];
// para.innerHTML = findMax(exampleArr);
