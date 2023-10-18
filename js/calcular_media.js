var nota1, nota2, nota3, nota4, media

nome = 'toinho costa'
nota1 = 7.5
nota2 = 7
nota3 = 8.5
nota4 = 9

media = (nota1 + nota2 + nota3 + nota4) / 4

/**
 * A ESCOLA DISSE QUE O ALUNO SERÁ APROVADO
 * SE ESTIVER COM A MÉDIA DE 7 EM DIANTE
 */

if(media >= 7) { 
    console.log(`O aluno ${nome} esta aprovado com a média ${media}`)
}else {
    console.log(`O aluno ${nome} esta reprovado com a média ${media}`)
}