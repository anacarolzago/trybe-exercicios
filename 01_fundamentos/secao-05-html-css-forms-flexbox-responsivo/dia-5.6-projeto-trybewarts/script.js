//
const validaFormulario = () => {
    const email = document.getElementById('inputEmail').value;
    const senha = document.getElementById('inputSenha').value;

    if (email === 'tryber@teste.com' && senha === '123456') {
        alert('Olá, Tryber!');
    } else {
        alert('Email ou senha inválidos.');
    }
};

const botao = document.querySelector('#btnForm');
botao.addEventListener('click', validaFormulario);

// Requisito 18

const validaBotao = () => {
    const button = document.getElementById('submit-btn');

    button.disabled = true;

    if (button.disabled) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
};

const checkbox = document.getElementById('agreement');
checkbox.addEventListener('click', validaBotao);