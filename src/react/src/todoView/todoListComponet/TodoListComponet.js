import React from 'react';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList : props.todoList
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            todoList : nextProps.todoList
        })

    }
    render() {
        return (
            <div>
                <table className="todo-table mui-table mui-table--bordered">
                    <tbody className="todo-item-box">
                    {
                        this.state.todoList.map(todoItem =>
                            <tr key={todoItem.id}>
                                <td>
                                    {todoItem.todo}
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TodoList;