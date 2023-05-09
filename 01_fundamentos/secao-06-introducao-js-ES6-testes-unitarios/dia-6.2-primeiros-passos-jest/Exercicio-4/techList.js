const techList = (arrayTechnologias, name) => {
    if (arrayTechnologias.length === 0) return 'Vazio!';

    const sorteArray = arrayTechnologias.sort();
    const technologyList = [];

    for (let index = 0; index < sorteArray.length; index += 1) {
        technologyList.push({
            tech: sorteArray[index],
            name: name,
        });
    }
    return technologyList;
};

module.exports = techList;
