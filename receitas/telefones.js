const texto = `
Lista telefônica:
    - (21) 12345-4234
    - (12) 42424-5344
    - 34344-4233
    - (96) 95332-3245
    - (1) 99992-5443
`
//meu jeito
console.log(texto.match(/\(?\d+\)?.\d+-\d+/g))

//jeito dos estudos
console.log(texto.match(/(\(\d{1,2}\)\s?)?\d{4,5}-\d{4}/g))