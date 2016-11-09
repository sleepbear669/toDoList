export default class Controller {
    constructor(view, store) {
        this.view = view;
        this.store = store;
    }

    update = () => {
        this.view.renderTodo(this.store.getItems());
    }
}
