export default class ToDoItem{
    constructor(value){
        this.id = new Date().getTime();
        this.value = value;
    }
}
