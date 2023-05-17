const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
// 1: acumulado = {  } | valorAtual = 'Alice'
// 2: acumulado = { Alice: 1, Bob: 1  } | valorAtual = 'Bob'
// 3: acumulado = { Alice: 1, Bob: 1, Tiff: 1  } | valorAtual = 'Tiff'
// 4: acumulado = { Alice: 1, Bob: 1, Tiff: 1, Bruce: 1  } | valorAtual = 'Bruce'
// 5: acumulado = { Alice: 2, Bob: 1, Tiff: 1, Bruce: 1  } | valorAtual = 'Alice'

const executar = (names) => {
    const initialValue = {};
    const resultado = names.reduce((acumulado, valorAtual) => {
        if (Object.keys(acumulado).includes(valorAtual)) {
            acumulado[valorAtual] += 1;
        } else {
            acumulado[valorAtual] = 1;
        }

        return acumulado;
    }, initialValue);
};


executar();