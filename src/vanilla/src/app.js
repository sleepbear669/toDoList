import Controller from './controller';
import View from './view';
import Store from './store';
import Template from './template';

let tempHtml = '';

let templateMaker = value => {
    return `<tr class="todo-item">
                    <td>${value}</td>
                </tr>`;
};

let todoInput = document.querySelector('.todo-input');
let todoItemBox = document.querySelector('.todo-item-box');
const ENTER = 13;

const store = new Store();
const template = new Template();
const view = new View(template);
const controller = new Controller(store, view);
controller.update();

todoItemBox.innerHTML = tempHtml;

todoInput.addEventListener('keyup', e => {
    let inputTarget = e.target;

    if (e.keyCode === ENTER && inputTarget.value != '') {
        tempHtml += templateMaker(e.target.value);
        todoItemBox.innerHTML = tempHtml;
        e.target.value = '';
    }
});

