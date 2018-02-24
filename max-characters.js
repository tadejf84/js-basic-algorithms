function maxChar(str){

  // declare object for tracking character count
  let charCount = {};

  // string to lower case and convert into array
  let strArr = str.toLowerCase().split('');

  // loop through the string array
  for(let char of strArr) {
    if (charCount[char] && char != ' ') {
      charCount[char]++;
    } else {
      if (char != ' ') {
        charCount[char] = 1;
      }
    }
  }

  // loop through the charCount object
  let maxCount = 0;
  let maxIndex;

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
