import View from './view';
import FireBaseStore from './../../common/FireBaseStore';
import Template from './template';
import ToDoItem from './../../common/toDoItem';

import {qs , $on} from './helpers';

const todoInput = qs('.todo-input');
const todoItemBox = qs('.todo-item-box');

const store = new FireBaseStore();
const template = new Template();
//const view = new View(template);
//const controller = new Controller(view, store);
//controller.update();

// Initialize Firebase
const todoRender = (todoList) => {
    todoItemBox.innerHTML = template.makeItemList(todoList);

};

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

const updateStore = items => {
    let todoList = [];
    for (let id in items) {
        todoList.push(items[id]);
    }
    todoRender(todoList);
};

const log = event => {
    return o => {
    };
};

store.on('todo/', 'value', updateStore);
store.on('todo/', 'child_added', log('child_added'));
store.on('todo/', 'child_changed', log('child_changed'));
store.on('todo/', 'child_removed', log('child_removed'));
//store.onValue(updateStore());
