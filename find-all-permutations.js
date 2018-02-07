// STILL IN DEVELOPMENT

function findAllPermutations(str) {
  var arr = str.split('');
  var permutations = [];
  var len = arr.length;

  // check if empty string
  if (str === ' ' || len === 0) {
    return 'You entered an empty string';
  }

  // check if only one character in string
  if (len === 1) {
    return str;
  }

  for (var i = 0; i < len; i++) {
    var copyArr = Object.create(arr);

    // pick one element and remove it from the array
    var picked = copyArr.splice(i, 1);

    // recursively permutate the rest
    var rest = findAllPermutations(copyArr.join(''));

    var len2 = rest.length;

     for (var j = 0; j < len2; j++) {

       // concatenate picked with rest and push in the new array
       var concatenated = picked.concat(rest[j]);
       permutations.push(concatenated.join(''));

     }
  }

  return permutations;

}

var para = document.querySelector('p');
// para.innerHTML = findAllPermutations('try');
