let tempHtml = '';

let templateMaker = value => {
    return `<tr class="todo-item">
                    <td>${value}</td>
                </tr>`;
};

let todoInput = document.querySelector('.todo-input');
let todoItemBox = document.querySelector('.todo-item-box');
const ENTER = 13;

todoItemBox.innerHTML = tempHtml;

todoInput.addEventListener('keyup', e => {
    if(e.keyCode === ENTER) {
        tempHtml += templateMaker(e.target.value);
        todoItemBox.innerHTML = tempHtml;
        e.target.value = '';
    }
});