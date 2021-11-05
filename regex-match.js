let code = 'X89112J121A12112V12212A12S01965C11306R00065I80051P43470T508';
let exp = /[A-Za-z]\d+/g;
let descript = code.match(exp);
console.log(descript);