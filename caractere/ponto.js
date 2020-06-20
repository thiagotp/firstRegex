// . é um metacaractere que pode assumir o valor de qualquer caractere

const texto = "1,2,3,4,5,6,7,8,9,0"

//Nesse exemplo o ponto está assumindo o valor de ,
console.log(texto.match(/1.2/g))
//Aqui com o escape o ponto funciona com o valor literal
console.log(texto.match(/1\.2/g))

console.log(texto.match(/1..2/g))
console.log(texto.match(/1..,/g))

const notas = '8.3,7.1,8.8,10.0'

console.log(notas.match(/8../g))
console.log(notas.match(/.\../g))

const desafio = 'lista de arquivos mp3: jazz.mp3,rock.mp3,podcast.mp3,blues.mp3'

console.log(desafio.match(/\.mp3/g))