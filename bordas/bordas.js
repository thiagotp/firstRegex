const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

console.log(texto.match(/r/gi))
//O circunflexo ora de um conjunto quer dizer início de linha ou string
console.log(texto.match(/^r/gi))
//O $ quer dizer final de linha ou string
console.log(texto.match(/r$/gi))


console.log(texto.match(/^r.*r$/gi)) //problema do dotall
