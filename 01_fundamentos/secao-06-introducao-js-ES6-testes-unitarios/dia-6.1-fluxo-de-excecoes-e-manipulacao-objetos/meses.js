// If testa a condição, Swith testa o valor

const getNumberOfDaysInMonth = (month) => {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
            break;
        case 2:
            return 28;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
            break;
        default:
            //console.log('Erro!');
            //return 'Erro!';
            throw new Error('Mês inválido!')
    }
};

console.log(getNumberOfDaysInMonth(1));

window.onload = () => {
    const inputMonth = document.getElementById('month');
    const botao = document.getElementById('button');
    const result = document.getElementById('result')

    botao.addEventListener('click', () => {
        try { 
        const numeroDeDias = getNumberOfDaysInMonth(parseInt(inputMonth.value));
        result.innerHTML = `O mês ${inputMonth.value} tem ${numeroDeDias} dias!`;
        } catch (error) {
            //console.log('Deu ruim');
            result.innerHTML = `Deu um erro: ${error.message}`;
        }
    })
};

