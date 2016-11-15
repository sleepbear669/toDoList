import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TodoView from './todoView/todoView';

injectTapEventPlugin();

const App = () => (
    <MuiThemeProvider>
        <TodoView/>
    </MuiThemeProvider>
);

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);