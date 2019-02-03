/*
* filter array for numbers
*/
function isNumber(arr) {
  return arr.filter(el => {
    return typeof el === "number";
  });
}

