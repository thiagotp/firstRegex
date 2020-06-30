const texto = 'O José Simão é muito engraçado... hehehehehe'

console.log(texto.match(/(he)+/gi))

const texto1 = 'http://www.udemy.com   www.youtube.com google.com.br'
console.log(texto1.match(/(http:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/gi))
console.log(texto1.match(/(http:\/\/)?(www\.)?\w+\.[\w.]+/gi))
