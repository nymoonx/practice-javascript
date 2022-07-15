const { inspect } = require('util');


const verResultado = (...args) => console.log(inspect(args, {
    colors: true,
    depth: 1000,
}));

module.exports = {
    verResultado,
};
