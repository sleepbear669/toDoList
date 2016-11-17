import React from 'react';

import TodoHeader from './todoHeaderComponent/TodoHeaderComponent';
import TodoContent from './todoContentsComponent/TodoContentComponent';

class TodoView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <TodoHeader/>
                <TodoContent/>
            </div>
        );
    }

}


export default TodoView;