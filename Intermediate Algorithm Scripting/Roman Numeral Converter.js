/*
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {
    let str = '';
    var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanNumeral = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I"
    ];
    for(let i = 0; i < decimalValue.length; i++){
      while(decimalValue[i] <= num){
        str += romanNumeral[i]
        num -= decimalValue[i]
      }
    }
   return str;
  }
  
  console.log(convertToRoman(36));
//output: XXXVI  