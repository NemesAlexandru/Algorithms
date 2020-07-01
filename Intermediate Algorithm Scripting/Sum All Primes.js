/*
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. 
For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 
4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

sumPrimes(10) should return 17.
sumPrimes(977) should return 73156.
*/

function sumPrimes(num) {
    if(num <= 0){
      return 0;
    }
    let arr = [];
  for(let i = 1; i <= num; i++){
    if(isPrime(i)){
      arr.push(i)
    }
  }
  return arr.reduce((a, b) => a + b);
  }
  
  function isPrime(x) {
    for (let i = 2; i < x; i++) {
      if (x % i === 0) return false;
    }
    return x !== 1 && x !== 0;
  }
  
  console.log(sumPrimes(10));
  //output: 17