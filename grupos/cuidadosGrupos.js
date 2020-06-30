const texto = 'Pedrinho (filho do Pedro Silva) é douto do ABC!'

//1º cuidado -> dentro de um conjunto o grupo se perde (não é reconhecido como grupo)
console.log(texto.match(/[(abc)]/gi))
//2º cuidado -> o conjunto é reconhecido dentro de um grupo
console.log(texto.match(/([abc])/gi))



