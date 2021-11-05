/* Recebemos de um cliente um arquivo que, segundo ele, era para ser um CSV (valores separados por 
vírgula). Contudo, como nada é perfeito, logo na primeira linha há evidência que foram utilizados 
vírgula, hífen e ponto e vírgula. Com certeza, nada foi padronizado! */

let file = '272-698;749,32';
let exp = /[-;,]/;
let value = file.split(exp);
console.log(value); 
