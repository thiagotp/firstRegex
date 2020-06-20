const texto = '1,2,3,a.b c!d?e[f'

console.log(texto.match(/\D/g))
//o metacaractere "^" dentro de um conjunto significa a negação do conjunto
console.log(texto.match(/[^0-9]/g))