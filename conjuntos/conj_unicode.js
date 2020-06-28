const texto = 'áéíóú àèìòù âêîôû ç ãõ ü'

//usando itervalos para pegar caracteres com acentos
console.log(texto.match(/[\u00C0-\u0171]/g))
console.log(texto.match(/[^\u00C0-\u0171]/g))
console.log(texto.match(/[Á-ü]/g))
