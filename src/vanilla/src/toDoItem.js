export default class ToDoItem{
    constructor(id, todo){
        this.id = id;
        this.createAt = new Date().getTime();
        this.todo = todo;
    }
}
