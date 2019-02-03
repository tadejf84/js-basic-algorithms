/*
* find max value in array
*/
function findMax(arr) {
  let max = 0;

  // using math max and spread operator
  max = Math.max(...arr);

  // using a map method 
  // arr.map( num => {
  //   if (num > max){
  //     max = num;
  //   }
  // });

  return max;

}
