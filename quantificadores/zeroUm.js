const texto = 'De longe eu avistei o fogo e uma pessoa gritando: FOGOOOOO!'
const texto2 = 'There is a big fog in NYC'

// ? -> representa o zero ou um (opcional)

//nessa regex a o último "o" da palavra fogo é opicional
const regex = /fogo?/gi

console.log(texto.match(regex))
console.log(texto2.match(regex))