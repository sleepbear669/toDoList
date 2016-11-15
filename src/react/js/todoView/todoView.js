import React from 'react';

import TodoHeader from 'todoHeaderComponent/TodoHeaderComponent';

class TodoView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <TodoHeader/>
            </div>
        );
    }

}


export default TodoView;