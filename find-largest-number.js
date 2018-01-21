function findMax(arr) {
  var max = 0;

  // USING A FOR LOOP
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  // USING MATH.MAX METHOD AND SPREAD(...)
  // max = Math.max(...arr);

  // USING A MAP METHOD
  // arr.map(function(num){
  //   if (num > max){
  //     max = num;
  //   }
  // });

  return max;

}

var para = document.querySelector('p');

// var exampleArr = [6, 7, 111, 12177, 227, 13, 1890, 11];
// para.innerHTML = findMax(exampleArr);
