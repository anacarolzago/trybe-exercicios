const createSuperhero = (...superheroData) => {
    const [name, superheroName, nickname, powers] = superheroData;
    return { name, superheroName, nickname, powers };
};

module.exports = {createSuperhero};