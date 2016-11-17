import React from 'react';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

import Input from 'muicss/lib/react/input';

const ENTER_KEY_CODE = 13;

import TodoList from './../todoListComponet/TodoListComponet';
import FireBaseStore from './../../../../common/FireBaseStore';
class TodoContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toDoList: []
        };
        this.fireBaseStore = new FireBaseStore();
        this.fireBaseStore.on('todo/', 'value', this.updatedStore)

    }

    updatedStore = (items) => {
        let todoList = [];
        for (let id in items) {
            todoList.push(items[id]);
        }
        this.setState({
            toDoList: todoList
        });
    };
    addItem = todo => {
        this.fireBaseStore.addItem(todo);
    };

    checkEnterKeyPress = (e) => {
        e.stopPropagation();
        if (e.charCode === ENTER_KEY_CODE) {
            this.addItem(e.target.value);
            e.target.value = '';
        }
    };

    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col xs="12" md="8" md-offset="2">
                        <Input
                            hint="Write Your Todo"
                            onKeyPress={this.checkEnterKeyPress}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" md="8" md-offset="2">
                        <TodoList
                            todoList={this.state.toDoList}
                        />
                    </Col>
                </Row>
            </Container>

        );
    }
}

export default TodoContent;
