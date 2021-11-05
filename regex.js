let target = '11a22b33c';
let exp = /(\d\d)(\w)/g;
console.log(exp.test(target)); /* Caso só quisermos saber se há algum match, existe o método test 
que nos devolve um valor booleano. */


/* let resultado = null;
while (resultado = exp.exec(target)){
    console.log(resultado);
    console.log(exp.lastIndex);
}; */
