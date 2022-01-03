const ALUNOS = [
    {
        nome : "Leandro",
        nota : 10,
        turma : "A",
    },
    {
        nome : "Carlos",
        nota : 9,
        turma : "B",
    },
]

function alunosAprovados(arr, media) {
    let aprovados = [];
    for (let i = 0; i < arr.length; i++){
        
        const {nota, nome} = arr[i];
        
        if(nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(ALUNOS, 10));