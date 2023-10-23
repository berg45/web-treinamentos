const input = require('readline-sync')

var n1, n2, result

var n1 = parseInt(input.question('informe um numero?'))
var n2 = parseInt(input.question('informe outro numero?'))

result = n1 - n2

console.log(`o resultado é ${result}`)