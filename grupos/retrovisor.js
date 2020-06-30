const texto = '<b>Destaque</b><strong>Forte</strong><div>Conteudo</div>'

console.log(texto.match(/<(\w+)>.*<\/\1>/gi))

const texto1 = 'Lentamente é mente muito lenta.'

console.log(texto1.match(/(lenta)(mente).*\2.*\1\./gi))

//?: não guarda o valor no grupo para o retrovisor
console.log(texto1.match(/(?:lenta)(mente).*\1/gi))

console.log(texto1.match(/(lenta)(mente)/gi))
console.log(texto1.match(/(lenta)(mente)?/gi))
console.log(texto1.replace(/(lenta)(mente)/gi, '$1'))
console.log(texto1.replace(/(lenta)(mente)/gi, '$2'))
console.log(texto1.replace(/(lenta)(mente)/gi, 'UHFEA $2 UHIGE'))
