const defaultOptions = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    },
}

const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', defaultOptions)
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        ...defaultOptions,
        completado: {
            alias: 'c',
            default: true,
            desc: 'Marca como completado o pendiente la tarea'
        },
    })
    .command('eliminar', 'Elimina una tarea de la lista', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripción de la tarea a eliminar'
        },
    })
    .help()
    .argv;

module.exports = {
    argv,
};

