const fs = require('fs');

let toDoList = [];

const saveDB = () => {
    let data = JSON.stringify(toDoList);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
}

const loadDB = () => {
    try {
        toDoList = require('../db/data.json');
    } catch (error) {
        toDoList = [];
    }

}

const getList = () => {
    loadDB();
    return toDoList;
}

const create = (description) => {

    loadDB();

    let toDo = {
        description,
        completed: false
    };

    toDoList.push(toDo);
    saveDB();

    return toDo;
}

const update = (description, completed = true)=>{
    loadDB();
    let index = toDoList.findIndex(work => work.description === description);
    if(index >=0){
        toDoList[index].completed = completed;
        saveDB();
        return true;
    }else{
        return false;
    }
}

const deleteWork = (description)=>{
    loadDB();
    let newList = toDoList.filter(work =>work.description !== description)
    if(toDoList.length === newList.length){
        return false;
    }else{
        toDoList = newList
        saveDB();
        return true;
    }
}

module.exports = {
    create,
    getList,
    update,
    deleteWork
}