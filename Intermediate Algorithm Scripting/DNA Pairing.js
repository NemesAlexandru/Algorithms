/*
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
Base pairs are a pair of AT and CG. Match the missing element to the provided character.
Return the provided character as the first element in each array.
For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

function pairElement(str) {
    var arr = [];

function pairCheck(elem) {
switch(elem){
    case 'C': arr.push(['C', 'G']);
    break;
    case 'G': arr.push(['G', 'C']);
    break;
    case 'A': arr.push(['A', 'T']);
    break;
    case 'T': arr.push(['T', 'A']);
    break;
}
};
for(let i = 0; i < str.length; i++){
    pairCheck(str[i]);
}
return arr;
} 
console.log(pairElement("GCG"));
//output: [ [ 'G', 'C' ], [ 'C', 'G' ], [ 'G', 'C' ] ]