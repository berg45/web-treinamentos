const input = require('readline-sync')

var temperatura = parseFloat(input.question('informe uma temperatura: '))
var tipo = input.question('Deseja converter: 0 - Celsius | 1 - Fahrenheit: ')
let calculo, resultado

switch (tipo) {
    case '0':
        calculo = (temperatura - 32) * 5 / 9 // FORMULA CELSIUS
        resultado = `A temperatura ${temperatura} ºF é ${calculo} °C`
        break;

    case '1':
        calculo = (temperatura * 9 + 160) / 5 // FORMULA FAHRENHEIT
        resultado = `A temperatura ${temperatura} °C é ${calculo} ºF`
        break;

    default:
        resultado = `Opção inválida`
        break;
}

console.log(resultado)