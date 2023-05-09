const soma = (numero1, numero2) => {
    return numero1 + numero2;
}

const summationOf = (num) => {
   let sommation = 0;

   for (let index = 1; index <= num; index += 1) {
    sommation += index;
   }

   return sommation;
};

console.log(typeof summationOf);

module.exports = { soma, summationOf };
