const texto = `
Lista telefônica
    - (11) 98742-9843
    -98474-9482
    - (43) 91284-8942
    - (25)90998-4234
`

console.log(texto.match(/\(\d{2}\) ?\d{5}\-\d{4}|\d{5}\-\d{4}/gi))
console.log("outra forma")
console.log(texto.match(/\(\d{2}\)\s?\d{5}\-\d{4}|\d{5}\-\d{4}/gi))
console.log("outra forma 2")
console.log(texto.match(/\(?\d{0,2}\)?\s?\d{4,5}-\d{4}/gi))