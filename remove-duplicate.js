function removeDuplicate(arr) {
  var exists = {};
  var el, i;
  var sorted = [];


  // for (i = 0; i < arr.length; i++) {
  //   el = arr[i];
  //   if(!exists[el]) {
  //     sorted.push(el);
  //     exists[el] = true;
  //   }
  // }

  var arr2 = [];
  arr.map(function(item) {
    if (arr2.indexOf(item) === -1) {
      arr2.push(item);
    }
  });

  return arr2;
}

var para = document.querySelector('p');
var example = [4, 7, 7, 3, 'test', 12, 'test', 3];
//para.innerHTML = removeDuplicate(example);
