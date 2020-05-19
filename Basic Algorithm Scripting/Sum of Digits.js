function sum(n){ 
let num = n.toString();
let sum = 0;
for(let i = 0; i < num.length; i++){
sum += parseInt(num[i])
}return sum;
}

console.log(sum(245));
//output: 11