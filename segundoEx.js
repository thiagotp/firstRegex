const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'
//Modos de como chamar uma regex
const regexNove = RegExp('9')
console.log('Métodos da RegExp...')
//O método teste retorna true or false
console.log(regexNove.test(texto))
//O método exec retorna o resultado da busca
console.log(regexNove.exec(texto))


const regexLetras = /[a-f]/g
console.log('Métodos da string...')
console.log(texto.match(regexLetras))
//O método search retorna o resultado da busca indicando o lugar do primeiro elemento encontrado
console.log(texto.search(regexLetras))
//O método replace substitui os itens encontrados na busca pelo parâmetro escolhido
console.log(texto.replace(regexLetras, 'Achei'))
//O método split separa em arrays aqui que foi procurado
console.log(texto.split(regexLetras))
