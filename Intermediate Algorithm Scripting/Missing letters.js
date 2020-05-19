/*
Find the missing letter in the passed letter range and return it.
If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
    var index = []
    var s = 'abcdefghijklmnopqrstuvwxyz'
    let finalStr = ''
  
  if(str == 'abcdefghijklmnopqrstuvwxyz'){
    return undefined;
  }
  
    function check(char){
     index.push(s.indexOf(char))
    }
    
  
  for(var j = 0; j < str.length; j++){
    check(str[j]);
  }
  
  for(let i = 0; i < index.length; i++){
    if(parseInt(index[i]) + 1 < parseInt(index[i + 1])){
    finalStr += s.charAt(index[i] + 1)
    }
  }
  
    return finalStr;
  }
  
  console.log(fearNotLetter("abce"));
  //output: d