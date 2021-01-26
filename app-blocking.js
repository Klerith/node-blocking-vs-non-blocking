const { getUsuarioSync } = require('./usuarios/usuarios');

console.log('Inicio de programa');
console.time('inicio');


const usuario1 = getUsuarioSync( 1 );
console.log('Usuario 1:', usuario1 );


const usuario2 = getUsuarioSync( 2 );
console.log('Usuario 2:', usuario2 );



console.log('Fin de programa');
console.timeEnd('inicio');