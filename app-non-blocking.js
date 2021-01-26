const { getUsuario } = require('./usuarios/usuarios');

console.log('Inicio de programa');
console.time('inicio');


getUsuario( 1, ( usuario ) => {
    console.log('Usuario 1:', usuario );
});


getUsuario( 2, ( usuario) => {
    console.log('Usuario 2:', usuario );
    console.timeEnd('inicio');
});


console.log('Fin de programa');