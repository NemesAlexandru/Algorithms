/*
Creati o functie care sa inlocuiasca caracterele de tip spatiu cu underline si sa inlocuiasca sirul de caractere 
“e” cu sirul de caractere “i” dintr-un sir de caractere primit ca parametru. 
Verificati ca este sir de caractere inainte de a face aceasta operatie. 
Returnati sirul de caractere modificat sau returnati sirul urmator daca nu a fost primit un sir de caracatere: 
“Dati va rog un sir de caractere” Rulati codul pentru “Merele, perele si pestele nu au E-uri”
*/

function spellCheck(str){
if(typeof str !== 'string'){
    return 'Dati va rog un sir de caractere'
}
let charArr = str.split('');

for(let i = 0; i < charArr.length; i++){
if (charArr[i] == ' '){
    charArr[i] = '_'
}else if (charArr[i] == 'e'){
    charArr[i] = 'i'
}
}
return charArr.join('');
}

console.log(spellCheck("Merele, perele si pestele nu au E-uri"));
//output: Mirili,_pirili_si_pistili_nu_au_E-uri