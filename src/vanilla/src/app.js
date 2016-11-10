import Controller from './controller';
import View from './view';
import FireBaseStore from './fireBaseStore';
import Template from './template';
import ToDoItem from './toDoItem';

import {qs , $on} from './helpers';

const todoInput = qs('.todo-input');
const todoItemBox = qs('.todo-item-box');

const store = new FireBaseStore();
const template = new Template();
//const view = new View(template);
//const controller = new Controller(view, store);
//controller.update();

// Initialize Firebase


$on(todoInput, 'change', e => {
        let todo = e.target.value.trim();
        e.target.value = '';
        addItem(todo);
    }
);

const addItem = (todo) => {
    if (todo) {
        store.addItem(todo);
    }
};

store.onValue(items => {
    let todoList = [];
    for(let id in items){
        todoList.push(items[id]);
    }
    todoRender(todoList);
});
const todoRender = (todoList) => {
    todoItemBox.innerHTML = template.makeItemList(todoList);

};
