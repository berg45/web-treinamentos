const input = require('readline-sync')

var nome = input.question('informe o seu primeiro nome?')
var sobrenome = input.question('informe o seu sobrenome?')
var anoDeNascimento =
    parseInt(input.question('qual o ano que você nasceu?'))    

var anoAtual = new Date().getFullYear()

console.log(typeof(anoDeNascimento))

var calcularidade = anoAtual - anoDeNascimento

console.log(`olá, ${nome} ${sobrenome} você tem
 ${calcularidade}anos`)
