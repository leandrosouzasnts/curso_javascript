/* 
const MYERROR = new Error('Mensagem Inválida');
MYERROR.name = 'Invalid Message';

throw MYERROR;
*/

function validation(arr, num){
  try {
    if (!arr || !num) throw new ReferenceError('Envie os parâmetros');

    if (typeof arr !== 'object'  || typeof num !== 'number') 
        throw new TypeError('Array precisa ser do tipo Object ou Numero ser do tipo Number');

    if(arr.length !== num) throw new RangeError('Tamanho inválido!');

    return arr;
     } 
    catch (e) {
        if (e instanceof ReferenceError) {
            console.log('Este erro é um ReferenceError');
            console.log(e.name);
            console.log(e.stack);
        } else if (e instanceof TypeError) {
            console.log('Este erro é um TypeError');
            console.log(e.name);
            console.log(e.stack);
        } else if (e instanceof RangeError) {
            console.log('Este erro é um RangeError');
            console.log(e.name);
            console.log(e.stack);
        }
    }
}

let array = [1,2,3];
let num = '3'

validation(array, num);