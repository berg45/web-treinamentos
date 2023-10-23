const input = require('readline-sync')

var base, altura

base = parseFloat(input.question('informe a base: '))
altura = parseFloat(input.question('informe a altura: '))


//regra
console.log(`O volume ${base * altura / 2} cm`)