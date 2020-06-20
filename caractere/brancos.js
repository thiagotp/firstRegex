const texto = `
ca	r
r	o s!
`

console.log(texto.match(/ca/))
console.log(texto.match(/ca\tr\nr\to\ss!/))
console.log(texto.match(/ca\tr\nr\to s!/))

const desafio = 'a   b'

console.log(desafio.match(/a...b/))
console.log(desafio.match(/a\s \sb/))
console.log(desafio.match(/a  .b/))
//O + mostra que pode haver mais de um espaço em branco
console.log(desafio.match(/a\s+b/))
//O {} mostra quantifica quantas ocorrências de determinado caractere aparece
console.log(desafio.match(/a {3}b/))
console.log(desafio.match(/a\s{3}b/))