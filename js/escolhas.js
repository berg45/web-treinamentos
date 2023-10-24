const input = require('readline-sync')

var valor = parseFloat(input.question('informe um valor em real R$: '))
var moeda = input.question('Deseja converter para: 1 - Dolar | 2 - Euro | 3 - Libra ')
var resultado

switch (moeda) {
    case '1':
        resultado = `O valor em DOLAR será de $ ${(valor / 5.00).toFixed(2)}`
        break;
    case '2':
        resultado = `O valor em EURO será de € ${(valor / 6.50).toFixed(2)}`
        break;
    case '3':
        resultado = `O valor em LIBRA será de £ ${(valor / 6.08).toFixed(2)}`
        break;
    default:
        resultado = `Nenhuma opção selecionada para converte ${valor.toFixed}`
        break;
        
}

console.log(resultado)