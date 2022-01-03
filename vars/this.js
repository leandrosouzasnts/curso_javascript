
//Manipulando o This 
function calcularIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const PESSOA = {
    nome : "Leandro",
    idade : 24
}

const ANIMAL = {
    nome : "Rex",
    idade : 2
}

console.log(calcularIdade.call(PESSOA, 10));
console.log(calcularIdade.apply(PESSOA, [10]));