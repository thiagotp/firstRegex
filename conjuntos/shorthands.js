const texto = `1,2,3,4,5,6,a.b c!d?e\r\f	-
f_g`

//pegando digitos do texto (números)
console.log(texto.match(/\d/g))
//pegando digitos do texto (não números - [^0-9])
console.log(texto.match(/\D/g))
//pegando digitos do texto (caracteres [a-zA-Z0-9_])
console.log(texto.match(/\w/g))
//pegando digitos do texto (não caracteres - [^a-zA-Z0-9_])
console.log(texto.match(/\W/g))
//pegando digitos do texto (espaço em branco [ \t\r\f\n])
console.log(texto.match(/\s/g))
//pegando digitos do texto (não espaço em branco [^ \t\r\f\n])
console.log(texto.match(/\S/g))
