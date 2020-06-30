const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

//resolvendo o problema do dotall em JS
console.log(texto.match(/^r[\s\S]*r$/gi))