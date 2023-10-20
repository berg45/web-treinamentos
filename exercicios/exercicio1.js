const input = require('readline-sync')

var nome = input.question('informe o seu primeiro nome?')
var sobrenome = input.question('informe o seu sobrenome?')

console.log(`olá, ${nome} ${sobrenome}`)
