function findDuplicate(str) {
  let duplicate = [];

    /* get only alphanumeric chars, to lower case and split string to arary */
  const letter = str.replace(/[^a-z0-9]/gi,'')
                .toLowerCase()
                .split('');

  /* sort the array alphabettically */
  const letterSort = letter.sort();

  /* loop through the arr and push duplicate values into duplicate arr */
  for (let i = 0; i < letterSort.length; i++ ) {
    if (letterSort[i] === letterSort[i+1]) {
      duplicate.push(letterSort[i]);
    }
  }

  return duplicate;
}

var para = document.querySelector('p');
// para.innerHTML = findDuplicate('See this example');
