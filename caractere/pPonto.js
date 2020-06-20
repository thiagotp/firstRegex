const texto = 'Bom\ndia'
const texto2 = 'Bom\n\tdia'
console.log(texto.match(/./gi))
console.log(texto.match(/.../gi))
console.log(texto.match(/..../gi))
console.log(texto2.match(/./gi))

//nesse caso o "ponto" não engloba o /n
//em algumas linguagens podemos usar o /expressão/s mas isso não acontece no JS!