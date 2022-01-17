//O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

function isBigEnough(value) {
    return value >= 10;
  }
  
  var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
  // filtrado é [12, 130, 44]
console.log(filtered);


const name = ['Leandro', 'Carlos', 'Thayna'];

console.log(name.filter((arg) => arg.includes('Thay')));
 