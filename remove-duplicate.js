/**
 * Remove duplicate elements from array
 * 
 * @param {array} arr 
 * 
 * @returns {array} unique
 */
function removeDuplicateElementsFromArr(arr) {

    // By using the Set object
    return [...new Set(arr)];
    
    // By using an object for tracking
    // const obj = {};
    // for(let el of arr) {
    //     obj[el] = true;
    // }
    // const result = Object.keys(obj);
    // return result;

    // Filter method
    // return arr.filter((el, i, self) => {
    //     return self.indexOf(el) === i
    // });

    // Map method
    // let arr2 = [];
    // arr.map(el => {
    //     if (arr2.indexOf(el) === -1) {
    //         arr2.push(el);
    //     }
    // });
    // return arr2;
}

