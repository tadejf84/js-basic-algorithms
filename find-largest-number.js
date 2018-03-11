function findMax(arr) {
  let max = 0;

  /* using a for loop */
  for (let i of arr) {
    if (i > max) {
      max = i;
    }
  }

  /* using math max and spread operator */
  // max = Math.max(...arr);

  /* using a map method */
  // arr.map( num => {
  //   if (num > max){
  //     max = num;
  //   }
  // });

  return max;

}

var para = document.querySelector('p');
var exampleArr = [6, 7, 111, 12177, 227, 13, 1890, 11];
// para.innerHTML = findMax(exampleArr);
