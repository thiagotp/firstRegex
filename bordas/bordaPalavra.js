const texto = 'dia diatonico diafragma media wikipedia bom_dia melodia radial'

//palavras que comecem com dia e tenham algum texto depois
console.log(texto.match(/\bdia\w+/gi))
//palavras que tenham texto antes e terminem com dia
console.log(texto.match(/\w+dia\b/gi))
//palavras que tenham dia no meio 
console.log(texto.match(/\w+dia\w+/gi))

// borda é o oposto do \w, ou seja, [^A-Za-z0-9_]... acentos são considerados bordas (PROBLEMA)

const texto2 = 'dia diatônico diafragma, média wikipédia bom-dia melodia radial'
//aqui o resultado não irá sair como desejado
console.log(texto2.match(/\bdia\b/gi))
//aqui o restultado é quase o desejado (nesse caso a vírgula perto do diafragma também aparece no resultado)
console.log(texto2.match(/(\S*)?dia(\S*)?/gi))
//refinando um pouco o resutado
console.log(texto2.match(/([\wÀ-ú]*)?dia([\wÀ-ú]*)?/gi))






