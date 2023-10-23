const input = require('readline-sync')

var base, altura, areaDoTriangulo

base = parseFloat(input.question('informe a base do triangulo: '))
altura = parseFloat(input.question('informe a altura do triangulo: '))


//regra
areaDoTriangulo = base * altura / 2
console.log(`A area do triangulo é ${areaDoTriangulo} cm`)