function arrChunk(arr, len) {
  const chunkedArr = [];
  let i = 0;

  /* slice the array into chunks of length len */
  while(i < arr.length) {
    chunkedArr.push(arr.slice(i, i + len));
    i += len;
  }

  /* loop through the array and return chunks */
  return chunkedArr.map((arr, index) => {
    return 'Chunk ' + (index + 1) + ': ' + arr;
  });

}

var para = document.querySelector('p');
var example = [12, 11, 7, 13, 14, 16, 2, 22, 4];
// para.innerHTML = arrChunk(example, 2);
