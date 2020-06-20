const texto = '1,2,3,4,5,6,a.b c!d?e'

const virgula = /,/
console.log(texto.split(virgula))
console.log(texto.match(virgula))

console.log(texto.match(/,/g))
console.log(texto.match(/A/g))
console.log(texto.match(/A/gi))
console.log(texto.match(/2/gi))
console.log(texto.match(/b c!/gi))