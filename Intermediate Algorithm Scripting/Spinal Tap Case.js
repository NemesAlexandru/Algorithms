/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
pinalCase("thisIsSpinalTap") should return "this-is-spinal-tap"
spinalCase("AllThe-small Things") should return "all-the-small-things".
spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap"
*/

function spinalCase(str) {

 return str.split(/\s|_|(?=[A-Z])/).join('-').toLowerCase();
 }
  
  console.log(spinalCase('AllThe-small Things'));
  //output: all-the-small-things