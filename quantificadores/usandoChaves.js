const texto = 'O João recebeu 120 milhões apostando 6 9 21 23 45 46'

//para definir o quantificador é necessário usar "{}"

//1 ou 2 dígitos
console.log(texto.match(/\d{1,2}/g))
//apenas 2 dígitos
console.log(texto.match(/[0-9]{2}/g))
//1 ou + dígitos
console.log(texto.match(/\d{1,}/g))

//palavras com 7 ou + dígitos
console.log(texto.match(/\w{7,}/g))
console.log(texto.match(/[\wõ]{7,}/g))