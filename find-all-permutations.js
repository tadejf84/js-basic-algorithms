/*
* find all permutations of a string
*/
function findAllPermutations(str) {
  let permutations = [];

  // get only alphanumeric chars, to lower case and split string to array
  const arr = str.replace(/[^a-z0-9]/gi,'')
                .toLowerCase()
                .split('');
  const len = arr.length;

  // initial input check
  if (len === 0) { return 'You entered an empty string!'; }
  if (len === 1) { return str; }

  arr.forEach( (el, index) => {

    // for each iteration create a new instance of the array
    const copyArr = Object.create(arr);

    // pick one element and remove it from the array
    const picked = copyArr.splice(index, 1);

    // recursively permutate the rest
    const rest = findAllPermutations(copyArr.join(''));

    // concatenate picked with rest and push in the new array
    for (let el of rest) {
      const concatenated = picked.concat(el);
      permutations.push(concatenated.join(''));
    }

  });

  return permutations;
}
