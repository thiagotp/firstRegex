const texto = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOO!'
const texto2 = 'There is a big fog in NYC'

// * -> representa zero ou mais ocorrências

const regex = /fogo*/gi

console.log(texto.match(regex))
console.log(texto2.match(regex))