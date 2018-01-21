function findDuplicate(str) {

  var letter = str.split('');

  var letterSort = letter.sort();

  var duplicate = [];

  for (var i=0; i < letterSort.length; i++ ) {
    if (letterSort[i] === letterSort[i+1] && letterSort[i] !== ' ') {
      duplicate.push(letterSort[i]);
    }
  }

  return duplicate;
}

var para = document.querySelector('p');

// para.innerHTML = findDuplicate('See this example');
