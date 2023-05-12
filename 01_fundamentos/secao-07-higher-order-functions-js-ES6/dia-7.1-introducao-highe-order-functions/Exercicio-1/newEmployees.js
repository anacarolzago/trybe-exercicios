// Nova pessoa contratada

// Crie uma função que receba como parâmetro o nome completo da nova pessoa colaboradora e que automaticamente gere um email no formato nome_da_pessoa@trybe.com;

// Utilize a função newEmployees, definida abaixo, para receber a sua função como parâmetro e criar o objeto de cada pessoa contratada.

const newEmployees = () => {
    const employees = {
        id1: geraNome('Pedro Guerra'), 
        // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
        id2: geraNome('Luiza Drumond'), 
        // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
        id3: geraNome('Carla Paiva') 
        // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};

const geraNome = (nomeCompleto) => {
    const email = nomeCompleto.toLowerCase().split(' ').join('_'); // Deixa as letras miniscúlas, separa as palavras em 'pedro', 'guerra', e junta as palavras de novo com _ 
    return {nomeCompleto, email: `${email}@betrybe.com`}
};

console.log(newEmployees(geraNome));

