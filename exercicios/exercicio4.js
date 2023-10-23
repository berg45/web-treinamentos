const input = require('readline-sync')

// peso das provas
const p2 = 2
const p3 = 3
const p5 = 5

var notaDisciplina1, notaDisciplina2, notaDisciplina3, mediaPoderada

notaDisciplina1 = parseFloat(input.question('informe a nota da disciplina1: '))
notaDisciplina2 = parseFloat(input.question('informe a nota da disciplina2: '))
notaDisciplina3 = parseFloat(input.question('informe a nota da disciplina3: '))

//regra
mediaPoderada = (notaDisciplina1 * p2 + notaDisciplina2 * p3 + notaDisciplina3 * p5) / (p2 + p3 + p5)

console.log(`A sua média ponderada é ${mediaPoderada}`)