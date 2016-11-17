import React from 'react';
import ReactDOM from 'react-dom';
import TodoView from './todoView/todoView';


const App = () => (
    <TodoView/>
);

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);