const sumAll = (...meusValores) => {
    return meusValores.reduce((acc, curr) =>  acc + curr , 0);
 }
 
 const resultado = sumAll(1, 2, 3, 4);
 console.log(resultado);