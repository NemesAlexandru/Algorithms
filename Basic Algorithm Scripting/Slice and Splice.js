/* You are given two arrays and an index.
 Use the array methods slice and splice to copy each element of the first array into the second array, in order.
 Begin inserting elements at index n of the second array.
 Return the resulting array. The input arrays should remain the same after the function runs.

 frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].
 frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"]
*/

function frankenSplice(arr1, arr2, n) {

    let newArr = arr2.slice();
    newArr.splice(n, 0, ...arr1);

    return newArr;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);

  console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1))
  //output: [ 4, 1, 2, 3, 5, 6 ]