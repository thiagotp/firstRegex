const texto = `
Os e-mails dos convidados são:
    - ufehia@oofejf.com.br
    - guAjo@fieoja.com
    - oij3oju_uhfeau@ceacs.com.edu.br.inaf.fea
    - foeaj.fueauj@ojoajgae.br
    - thu1344@iufheia.com.euha.br
`

console.log(texto.match(/\w+?\.?\w+@\w+\.\w*\.?\w*\.?\w*/gi))
console.log("outro modo")
console.log(texto.match(/[\w.]+@[\w.]+/gi))