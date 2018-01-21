function stringToInt(str) {
  var arr = str.split('');
  var sum = 0;

  // USING A FOR LOOP
  // for (var i=0; i < arr.length; i++) {
  //   sum += parseInt(arr[i])*Math.pow(10, arr.length-i-1 );
  // }

  // USING MAP METHOD
  var int = arr.map(function(currElement, index){
    sum += currElement*Math.pow(10, arr.length-index-1);
  });

  return sum;
}

var para = document.querySelector('p');
// para.innerHTML = stringToInt('105');
