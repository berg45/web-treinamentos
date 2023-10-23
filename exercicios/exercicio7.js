
const input = require('readline-sync')

var velocidade, tempo, distancia

distancia = 435
// recebendo o valor em km/h e convertendo para m/s
velocidade = parseFloat(input.question('informe a sua velocidade: ')) / 3.6

tempo = distancia / velocidade
//regra
console.log(`Na velocidade de ${velocidade.toFixed(2)} m/s levara o tempo de ${tempo / 3600} h`)