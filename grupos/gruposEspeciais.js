const texto = 'João é calmo, mas no trânsito fica nervoso.'

console.log(texto.match(/[\wÀ-ú]+/gi))

//Começando aqui os grupos especiais
//Positive lookahead (olha o que tá a frente para resolver o que vem atrás)
//a expressão diz para procurar uma vírgula na frente e uma palavra que dê match na expressão do conjunto
console.log(texto.match(/[\wÀ-ú]+(?=,)/gi))

//a expressão diz para procurar um ponto na frente e uma palavra que dê match na expressão do conjunto
console.log(texto.match(/[\wÀ-ú]+(?=\.)/gi))
console.log(texto.match(/[\wÀ-ú]+(?=, mas)/gi))

//Negative lookahead
//O "é" não entrou no resultado porque ele é considerado uma borda
console.log(texto.match(/[\wÀ-ú]+\b(?!,)/gi))

console.log(texto.match(/[\wÀ-ú]+[\s|\.](?!,)/gi))


/**
 * OS GRUPOS A SEGUIR O JAVASCRIPT NÃO SUPORTA
 * 
 * texto = 'supermercado superação hiperMERCADO'
 * 
 * puts texto.scan(/(?:super)[\wÀ-ú]+/i).join(' ')
 * 
 * #positive lookbehind
 * #ira procurar "prefixos" super
 * puts texto.scan(/(?<=super)[\wÀ-ú]/i).join(' ')
 * 
 * #negative lookbehind
 * puts texto.scan(/(?<!super)mercado/i)
 * */