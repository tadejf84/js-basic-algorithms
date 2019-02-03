/*
* find duplicate letters in a string
*/
function findDuplicate(str) {

  // get only alphanumeric chars, to lower case, sort and split string to array
  const letter = str.replace(/[^a-z0-9]/gi,'')
                .toLowerCase()
                .split('')
                .sort();

  // loop through the arr and return duplicate values
  return letter.filter((el,i) => {
    return el === letter[i+1];
  });

}

