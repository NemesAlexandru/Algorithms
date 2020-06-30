/*
Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order.
*/

function alphabeticalOrder(arr) {
    // Only change code below this line
  
  let sortedArr = arr.sort(function(a, b){
  return a === b ? 0 : a < b ? -1: 1;
  })
  return sortedArr;
    // Only change code above this line
  }
  console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));
  //output: [ 'a', 'a', 'c', 'd', 'g', 'z' ]