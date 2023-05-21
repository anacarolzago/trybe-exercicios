const formatDate = (ano, dia, mes, ...resto) => {
    if (resto.length === 3) {
        return `${dia}/${mes}/${ano} ${resto[0]}:${resto[1]}:${resto[2]}`    
    }
    return `${dia}/${mes}/${ano}`
}

// const dados = [1999, 5, 8, 17, 16, 56];
// console.log(formatDate(...dados));
module.exports = {formatDate};