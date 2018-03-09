function arrChunk(arr, len) {
  const chunkedArr = [];
  let i = 0;

  while(i < arr.length) {
    chunkedArr.push(arr.slice(i, i + len));
    i += len;
  }

  return chunkedArr.map((arr, index) => {
    return 'Chunk ' + (index + 1) + ': ' + arr;
  });

}

var para = document.querySelector('p');
var example = [12, 11, 7, 13, 14, 16, 2, 22, 4];
// para.innerHTML = arrChunk(example, 2);
