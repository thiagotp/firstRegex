const texto = 'Casa bonita é a casa amarela da esquina com a Rua ACASALAR!'
//buscando "casa" em toda a string ignorando maiúsculo e minúsculo
const regex = /casa/gi
console.log(texto.match(regex))

const regex2 = /casa bonita/gi
console.log(texto.match(regex2))

console.log(texto.match(/a b/))
console.log(texto.match(/a c/))
console.log(texto.match(/a a/))
