/*
1. Must have an uppercase character
2. Must have a lower case character
3. Must be 8 characters or longer (max 16)
4. Must have a special character
5. Must have a number
*/

const str = 'ffFa1aaaa!'

checkUpper = (input) => {
let reg = /[A-Z]/;
return reg.test(input);
}

checkLower = (input) => {
    let reg = /[a-z]/;
    return reg.test(input);
}

checkLength = (input) => {
    return input.length >= 8 && input.length < 16;
}

checkSpecial = (input) => {
    let reg = /\W/;
    return reg.test(input);
}

checkNum = (input) => {
    let reg = /\d/;
    return reg.test(input)
}

validator = (input) => {
return checkUpper(input) && checkLower(input) && checkLength(input) && checkSpecial(input) && checkNum(input);
}

console.log(validator(str));

