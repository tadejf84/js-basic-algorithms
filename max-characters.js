/*
* get char with most occurence in string
*/
function maxChar(str){
  let charCount = {},
      maxCount = 0,
      maxIndex;

  // string to lower case, only alphanumerical, split to array
  const strArr = str.toLowerCase()
                  .replace(/[^a-z0-9]/gi,'')
                  .split('');

  // count chars
  for(let char of strArr) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  // find highest char count
  for (let char in charCount) {
    if (charCount[char] > maxCount) {
      maxCount = charCount[char];
      maxIndex = char;
    }
  }

  return [maxIndex, maxCount];
}

