//todos os elementos do texto são metacaracteres
const texto = '.$+*?-'

//dentro de um conjunto alguns metacaracteres não precisam do "\" para terem seus valores literais
console.log(texto.match(/[$.+*?-]/g))
console.log(texto.match(/[$.+*?-]./g))
console.log(texto.match(/[.]/g))
console.log(texto.match(/./g))
//no caso do "-" ele continua funcionando como metacaractere de intervalo dentro do conjunto
console.log(texto.match(/[$-?]/g))

//Não é intervalo (range)...

console.log(texto.match(/[?$\-]/g))
console.log(texto.match(/[-?]/g))

// pode precisar de escape dentro do conjunto: - [] ^