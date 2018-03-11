function removeDuplicate(arr) {
  let el, exists = {}, arr2 = [];

  /* using a for loop */
  for (let i in arr) {
    el = arr[i];
    if(!exists[el]) {
      arr2.push(el);
      exists[el] = true;
    }
  }

  /* using map method */
  // arr.map(el => {
  //   if (arr2.indexOf(el) === -1) {
  //     arr2.push(el);
  //   }
  // });

  return arr2;
}

var para = document.querySelector('p');
var example = [4, 7, 7, 3, 'test', 12, 'test', 3];
// para.innerHTML = removeDuplicate(example);
