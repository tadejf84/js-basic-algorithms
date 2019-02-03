/*
* find first non repeating character in string
*/
function firstNonRepeatingChar(str) {
  let char, count = {};

  // loop through string arr and increment by 1 if exists, else init value to 1
  for (let i in str) {
    char = str[i];
    if (!count[char]) {
      count[char] = 1;
    } else {
      count[char]++;
    }
  }

  // if count is 1 return the first not repeating char
  for (let j in count) {
    if (count[j] === 1) {
      return j;
    }
  }
}

