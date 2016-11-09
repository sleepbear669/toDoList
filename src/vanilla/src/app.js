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
        todoRender();
    }
);

const addItem = (todo) => {
    if (todo) {
        store.addItem(new ToDoItem(todo));
    }
};

const todoRender = () => {
    todoItemBox.innerHTML = template.makeItemList(store.getItems());
};

todoRender();

