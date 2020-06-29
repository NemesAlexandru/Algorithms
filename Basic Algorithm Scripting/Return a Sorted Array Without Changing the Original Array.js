/*
Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. 
The function should return a new array, and not mutate the globalArray variable.
*/

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
let newArr = arr.slice().sort(function(a, b){
return a === b ? 0 : a < b ? -1 : 1
});

return newArr;
  // Only change code above this line
}
console.log(nonMutatingSort(globalArray));
