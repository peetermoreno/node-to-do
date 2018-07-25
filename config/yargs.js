
const description = {
    alias: 'd',
    demand: true,
    desc: 'Descripción de la tarea'
};

const completed = {
    alias: 'c',
    default: true,
    desc: 'Marca como completed o pendiente la tarea'
}

const argv = require('yargs')
    .command('create', 'Crea un elemento por hacer', {
        description
    })
    .command('update', 'Actualiza el estado completed de una tarea', {
        description,
        completed
    })
    .command('delete', 'Borra un elemento por hacer', {
        description
    })
    .help()
    .argv;

module.exports = {
    argv
}