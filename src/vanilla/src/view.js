import {qs} from './helpers';

const ENTER = 13;

export default class View{
    constructor(template){
        this.template = template;
        this.$todoInput = qs('.todo-input');
        this.$todoInput.addEventListener('change', e => {console.log('change')})
        this.$totoItemBox= qs('.todo-item-box');
    }

    renderTodo = (itemList) => {
        this.$totoItemBox.innerHTML = this.template.makeItemList(itemList);
    }
}