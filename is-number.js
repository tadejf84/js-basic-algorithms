function isNumber(arr) {
  let onlyNum = [];

  /* using a while loop */
  // let i = 0;
  // while (i < arr.length) {
  //   if (typeof arr[i] === "number") {
  //     onlyNum.push(arr[i]);
  //   }
  //   i++;
  // }

  /* using the array filter method*/
  onlyNum = arr.filter(el => {
    return typeof el === "number";
  });

  return onlyNum;
}

var para = document.querySelector('p');
var exampleArr = ["str", true, 33, 26, "test", 24, "6", 11, null, 'test2', 22];
// para.innerHTML = isNumber(exampleArr);
