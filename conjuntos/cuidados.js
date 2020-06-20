const texto = 'ABC [abc] a-c 1234'

console.log(texto.match(/[a-c]/g))
console.log(texto.match(/a-c/g)) // não é conjunto

//essa expressão tras, além das letras, alguns caracteres porque ele usa como parâmetro
//os caracteres existentes no intervalo da UNICODE
console.log(texto.match(/[A-z]/g))

//nesse caso é ocasionado um erro porque o intervalor não respeita a orde da tabela UNICODE
console.log(texto.match(/[z-A]/g))