/*
* remove duplicate elements in array
*/
function removeDuplicateElementsFromArr(arr) {

  // filter method
  return arr.filter((el, i, self) => {
    return self.indexOf(el) === i
  });

  /* using map method */
  // let arr2 = [];
  // arr.map(el => {
  //   if (arr2.indexOf(el) === -1) {
  //     arr2.push(el);
  //   }
  // });
  // return arr2;
}

