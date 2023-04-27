// Caso a função não receba name ou idade (ou ambos), lance uma exceção com a mensagem 'Todas as informações são necessárias'.

const validaInfo = (name, age) => {
    if (!name || !age) {
        throw new Error ("Todas as informações são necessárias");
    }
};

// Caso a função receba o nome e uma idade inferior a 18 anos, lance uma exceção com a mensagem 'Ops, infelizmente nesse momento você não pode fazer as aulas'

const validaAge = (age) => {
    if (age < 18) {
        throw new Error ("Ops, infelizmente nesse momento você não pode fazer as aulas");
    }
};

// Caso a função receba o nome e uma idade igual ou superior a 18 anos, retorne a string: 'Nome, seja bem-vindo(a) à AuTrybe!'

const studentRegister = (name, age) => {
    try {
        validaInfo(name, age);
        validaAge(age);
        return `${name}, boas-vindas à AuTrybe!`;

    } catch (error) {
        return error.message;
    }
};

console.log(studentRegister("Carlos", 18)); // Fluxo completo
console.log(studentRegister("Carlos", 12)) // Fluxo de exceção
console.log(studentRegister("Renan")) // Fluxo de exceção





