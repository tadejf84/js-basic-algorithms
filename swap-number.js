function swapNum(a, b) {

    // with temp
    // var temp;
    // temp = a;
    // a = b;
    // b = temp;

    // without temp
    b = b - a;
    a = a + b;
    b = a - b;

    return 'swapped a = ' + a + ', b = ' + b;

}

var para = document.querySelector('p');
// para.innerHTML = swapNum(5, 3);
