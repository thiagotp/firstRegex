const texto = '1,2,3,a.b c!d?e[f'

console.log(texto.match(/\D/g))
//o metacaractere "^" dentro de um conjunto significa a negação do conjunto
console.log(texto.match(/[^0-9]/g))

console.log(texto.match(/[^\d!\?\[\s,\.]/g))


const texto2 = '1: !"#$%&\'()*+,-./ 2: :;<=>?@'
//Aqui temos um exemplo com 2 intervalos. Um intervalo é "!-/" e o ou é ":-@"
console.log(texto2.match(/[^!-/:-@\s]/g))