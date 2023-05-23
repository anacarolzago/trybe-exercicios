const printCoordinates = (x, y, z) => {
    console.log(x, y, z);
    console.log( `Point coordinates are x = ${x}, y = ${y} and z = ${z}`);
};

const point = [1.0, 2.2, 'A'];
printCoordinates(...point);

module.exports = { printCoordinates };