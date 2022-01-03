// //funções anônimas
// const SOMA = function (a, b){
//     return a + b;
// }

// console.log(SOMA(1,2));
// console.log(SOMA(5,4));


// //função autoinvocável
// const FUNCAO = (
//     function (a, b) {
//         return a + b;
//     }
// ) (1,2);

// console.log(FUNCAO);

//callbacks
const CALC  = function(operacao, num1, num2){
    return operacao(num1, num2);
}

const SOMA = function (num1, num2) {
    return num1 + num2;
}

const SUB = function (num1, num2){
    return num1 - num2;
}

const resultSoma = CALC(SOMA, 1, 2);
const resultSub = CALC(SUB,1,2);

console.log(resultSoma);
console.log(resultSub);


function parms (num =  1) {
    return num;
}

console.log(parms());