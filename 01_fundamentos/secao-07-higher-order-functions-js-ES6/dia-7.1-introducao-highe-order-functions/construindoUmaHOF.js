/* Crie um sistema de conversão de moedas com a Função converteMoeda()
que seja capaz de converter REAL em DOLAR, BITCOIN ou EURO
e vice versa. A moeda de conversão pode ser qualquer uma. */

const cotacaoDolar = 4.94;
const cotacaoBitcoin = 145237.93;
const cotacaoEuro = 5.45;

const realToDolar = (valor) => valor / cotacaoDolar;
const dolarToReal = (valor) => valor * cotacaoDolar;

const realToBitcoin = (valor) => valor / cotacaoBitcoin;
const bitcoinToReal = (valor) => valor * cotacaoBitcoin;

const realToEuro = (valor) => valor / cotacaoEuro;
const euroToReal = (valor) => valor * cotacaoEuro;

const converteMoeda = (valor, minhaFuncao) => {
   const valorConvertido = minhaFuncao(valor);
   return valorConvertido;
};

console.log(converteMoeda(5, realToBitcoin));