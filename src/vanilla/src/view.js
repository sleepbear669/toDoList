export default class View{
    constructor(template){
        this.template = template;
        this.$totoItemBox = document.querySelector('.todo-item-box');
    }

    renderTodo = (itemList) => {
        this.$totoItemBox.innerHTML = this.template.makeItemList(itemList);
    }
}