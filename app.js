const argv = require('./config/yargs').argv;
const { crear, getListado, actualizar, eliminar } = require('./todos/todos');
const colors = require('colors');

let comando = argv._[0];

switch(comando) {
    case 'crear':
        let tarea = crear( argv.descripcion );
        console.log(tarea);
        break;
    case 'listar':
        let listado = getListado();

        for(let tarea of listado){
            console.log('==========Por hacer=========='.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('============================='.green);
        }
        break;
    case 'actualizar':
        let actualizado = actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'eliminar':
        let eliminado = eliminar(argv.descripcion);
        console.log(eliminado);
        break;
    default:
        console.log('Comando no reconocido');
}