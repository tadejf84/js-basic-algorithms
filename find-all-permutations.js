function findAllPermutations(str) {
  let permutations = [];

  /* get only alphanumeric chars, to lower case and split string to arary */
  const arr = str.replace(/[^a-z0-9]/gi,'')
                .toLowerCase()
                .split('');
  const len = arr.length;

  /* initial input check */
  if (len === 0) { return 'You entered an empty string'; }
  if (len === 1) { return str; }

  for (let i = 0; i < len; i++) {
    /* for each iteration create a new instance of the array */
    const copyArr = Object.create(arr);

    /* pick one element and remove it from the array */
    const picked = copyArr.splice(i, 1);

    /* recursively permutate the rest */
    const rest = findAllPermutations(copyArr.join(''));

     for (let j = 0; j < rest.length; j++) {
       /* concatenate picked with rest and push in the new array */
       const concatenated = picked.concat(rest[j]);
       permutations.push(concatenated.join(''));
     }
  }
  return permutations;
}

var para = document.querySelector('p');
// para.innerHTML = findAllPermutations('try');
