/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original 
provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates 
in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].
uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
*/

function uniteUnique(...arr) {
    let newSet = new Set();
    for(let j = 0; j < arr.length; j++){
      for(let i = 0; i < arr[j].length; i++){
    newSet.add(arr[j][i])
  }
    }
  
  let newArr = Array.from(newSet)
  return newArr;
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
  //output: [ 1, 3, 2, 5, 4 ]