
 /* Return the provided string with the first letter of each word capitalized. 
 Make sure the rest of the word is in lower case.
 For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
 */

function titleCase(str) {
    let caps = "";
    let arr = str.split(" ");
    
    for(let i = 0; i < arr.length; i++){
    
    caps += arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase() + " "   
    }
      return caps.trim();
    }
    
    console.log(titleCase("    HeRE IS MY HANDLE HERE IS MY SPOUT   "));
    //output: Here Is My Handle Here Is My Spout