function stringReverse(str) {
    var output = '';

    if(!str || typeof str !== 'string' || str.length < 2 ) {
      return str;
    }

    for (var i = str.length - 1; i >= 0; i--) {
      output += str[i];
    }

    return output;
}


var para = document.querySelector('p');
// para.innerHTML = stringReverse('example sentence');
