function maxChar(str){
  let charCount = {},
      maxCount = 0,
      maxIndex;

  /* string to lower case, only alphanumerical, split to array */
  let strArr = str.toLowerCase()
                  .replace(/[^a-z0-9]/gi,'')
                  .split('');

  /*
  loop through the string array
  increment by one if char already exists in charCount
  else initialize to 1
  */
  for(let char of strArr) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  /*
  loop through the charCount object,
  look for the char with the highest count
  */
  for (let char in charCount) {
    if (charCount[char] > maxCount) {
      maxCount = charCount[char];
      maxIndex = char;
    }
  }
  return 'The character with the most frequent occurence is ' + maxIndex + ' and can be found ' + maxCount + ' times in this example!';
}

var para = document.querySelector('p');
// para.innerHTML = maxChar('Houston, we have a problem!');
