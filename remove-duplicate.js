/*
* remove duplicate elements in array
*/
function removeDuplicateElementsFromArr(arr) {

  // using a set object
  return [...new Set(arr)];
  
  // by using an object for tracking
  // const obj = {};
  // for(let el of arr) {
  //   obj[el] = true;
  // }
  // const result = Object.keys(obj);
  // return result;

  // filter method
  // return arr.filter((el, i, self) => {
  //   return self.indexOf(el) === i
  // });

  // using map method
  // let arr2 = [];
  // arr.map(el => {
  //   if (arr2.indexOf(el) === -1) {
  //     arr2.push(el);
  //   }
  // });
  // return arr2;
}

