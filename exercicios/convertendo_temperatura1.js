const input = require('readline-sync')

var temperatura = parseFloat(input.question('informe um valor Fahrenheit:'))
let celsius 

celsius = (temperatura - 32) * 5/9


console.log(`Atemperatura ${temperatura} ºF é ${celsius} °C`)