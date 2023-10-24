/**
 * um clube de futebol pretende classificar seus atletas em categorias
 * 
 * 05 á 10 INFANTIL
 * 11 á 15 JUVENIL
 * 16 á 20 JUNIOR
 * 21 á 25 PROFISSIONAL
 * 
 * Solicitar o nome do atleta,idade
 */

const input = require('readline-sync')

var nome = input.question('informe o nome do atleta: ')
var idade = parseInt(input.question('informe a idade'))
var resultado

switch (idade) {
    case 5,6,7,8,9,10:
        resultado = `${nome}  Você é da categoria infantil `
        break;
    case 11,12,13,14,15:
        resultado = `${nome} Voçê é da categopria juvenil`
        break;
    case 16,17,18,19,20:
        resultado = `${nome} Voçê é da categoria Junior`
        break;
    case 21,22,23,24,25:
        resultado = `${nome} Voçê é da categoria profissional`
        break;
    default:
        resultado = `${nome} não esta em nenhuma categoria`
        break;    
}
0
console.log(resultado)