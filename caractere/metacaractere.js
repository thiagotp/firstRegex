//metacaractere e âncoras
// . ? * + - ^ $ | [] {} () \ :

const texto = '1,2,3,4,5,6,a.b c!d?e'
//O "\" (escape) serve para usar um metacaractere como um caractere de valor literal
const ponto = /\./g

console.log(texto.split(ponto))

const simbolo = /,|\.|\?|!| /g
console.log(texto.split(simbolo))