const texto = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOO!'
const texto2 = 'There is a big fog in NYC'

// + -> representa um ou mais ocorrências

const regex = /fogo+/gi

console.log(texto.match(regex))
console.log(texto2.match(regex))

const texto3 = 'Os números: 0123456789'
console.log(texto3.match(/[0-9]/g))
console.log(texto3.match(/\d/g))
//nos exemplos a seguir ele acha um caractere e vai reunindo o máximo possível por causa do "+"
console.log(texto3.match(/[0-9]+/g))
console.log(texto3.match(/\d+/g))

