const alunos = ['Pedro', 'Joao', 'Elias', 'Carla' , 'Bruno'] 
const alunos2 = alunos.map(item => {
    const novoItem = {
        item: item,
    }

    if(item === 'Pedro') {
        novoItem.nota = 9
    }
    if(item === 'Joao') {
        novoItem.nota = 8
    }
    if(item === 'Elias') {
        novoItem.nota = 4
    }
    if(item === 'Carla') {
        novoItem.nota = 6
    }
    if(item === 'Bruno') {
        novoItem.nota = 5
    }

    return novoItem
})

function notaMaiorQueSeis(aluno) {
    return aluno.nota >= 6
}

const aprovado = alunos2.filter(notaMaiorQueSeis)

console.table(aprovado)



