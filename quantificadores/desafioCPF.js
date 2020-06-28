const texto = `
CPF dos aprovados:
    - 600.567.890-12
    - 765.998.345-13
    - 424.425.529-14
    - 456.133.423-13
`

console.log(texto.match(/[\d\.\-]{14}/gi))
console.log("outra forma")
console.log(texto.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/gi))
