/*
Flatten a nested array. You must account for varying levels of nesting.

steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
*/

function steamrollArray(arr, resultArr = []) {
    arr.forEach(el => {
      if(Array.isArray(el)){
    steamrollArray(el, resultArr);
      }else resultArr.push(el);
    })
      return resultArr;
    }
    
    console.log(steamrollArray([1, [2], [3, [[4]]]]));
    //output: [ 1, 2, 3, 4 ]