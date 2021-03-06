export default class Template{

    makeItemList = itemList => {
        return itemList.reduce((a, item) => a + this.templateMaker(item), '');
    };
    templateMaker = item => {
        return `<tr data-id='${item.id}' class="todo-item">
                    <td>${item.todo}</td>
                </tr>`;
    }
}
