//no início existiam poucos caracteres registrados
//Um byte (8 bits) - 256 caracteres
//Esses 256 caracteres eram Símbolos, potuanção, A-Z, a-z, 0-9

//Depois foi mudado para Dois bytes (16 bits) - 65500+ caracteres
//Esses 65500+ caracteres eram +Símbolos, +potuanção, A-Z, a-z, 0-9

//Hoje
//Unicode, quantidade de bytes variável
//Abrange + 1 milhão de caracteres
//Atualmente tem mais de 100.000 caracteres atribuidos
//https://unicode-table.com/pt/

const texto = 'aƺbʩ'
//para procurar um caractere usando o unicode é necessário utilizar a o código equivalente na expressão regular
console.log(texto.match(/\u02A9|\u01BA/gi))