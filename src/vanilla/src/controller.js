export default class Controller {
    constrouctor(view, store) {
        this.view = view;
        this.store = store;
    }

    update = () => {
        this.view.renderTodo(this.store.getItems());
    }
}
