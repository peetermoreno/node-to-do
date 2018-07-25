const argv = require('./config/yargs').argv;
const colors = require('colors');

const toDo = require('./to-do/to-do');


let comando = argv._[0];

switch (comando) {
    case 'create':
        let work = toDo.create(argv.description);
        console.log(work);
        break;

    case 'list':
        let list = toDo.getList();
        for(let work of list){
            console.log('========= To Do =========='.green);
            console.log(work.description);
            console.log('Estado:',work.completed);
            console.log('=========================='.green);
        }
        break;

    case 'update':
        let updated = toDo.update(argv.description,argv.completed);
        console.log(updated);
        break;

    case 'delete':
        let deleted = toDo.deleteWork(argv.description);
        console.log(deleted);

    break;    

    default:
        console.log('comando no reconocido');
        break;
}