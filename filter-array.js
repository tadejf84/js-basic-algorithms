function filterArray(arr) {
  // var onlyNum = [];
  // for (var i = 0; i < arr.length; i++) {
  //   if (typeof arr[i] === "number") {
  //     if (i >= 1) {
  //       // make spaces after commas
  //       onlyNum.push(' ' + arr[i]);
  //     } else {
  //       // no spaces if first
  //       onlyNum.push(arr[i]);
  //     }
  //   }
  // }
  // return onlyNum;

  var onlyNum = arr.filter(function(item){
    return typeof item === "number";
  });
  return onlyNum;

}

var para = document.querySelector('p');

//var exampleArr = ["str", true, 33, 26, "test", 24, "6", 11];
//para.innerHTML = filterArray(exampleArr);
