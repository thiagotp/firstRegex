const texto ='1,2,3,4,5,6,a.b c!d?e[f'

//para definir uma classe ou conjunto de caracteres é necessário usar o []

const pares = /[02468]/g
const impares = /[13579]/g

console.log(texto.match(pares))
console.log(texto.match(impares))
console.log(texto.match(/[02468]|[13579]/g))
console.log(texto.match(pares|impares))

const texto2 = 'João não vai passear na moto'
const CSacento = /n[aã]/g

console.log(texto2.match(CSacento))