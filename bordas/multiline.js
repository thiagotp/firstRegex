const texto = `
Leo é muito legal
Emanuel foi jogar em Sergipe
Bianca é casada com Habib
`

console.log(texto.match(/\n/g))
console.log(texto.match(/^(\w).+\1$/gi)) // aqui retorna null porque ele não entende o \n
console.log(texto.match(/^(\w).+\1$/gim)) //o "m" significa multiline, ou seja, consegue verificar em todas as linhas