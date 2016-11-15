import React from 'react';
import AppBar from 'material-ui/AppBar';

class TodoHeader extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <header>
                <AppBar
                    title="Todo List"
                    showMenuIconButton={false}
                />
            </header>
        );
    }
}

export default TodoHeader;