import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TodoView }   from './todo-view/todo.view';
import 'hammerjs';
import { MaterialModule } from '@angular/material';

@NgModule({
    imports: [
        BrowserModule,
        MaterialModule.forRoot()
    ],
    declarations: [TodoView],
    bootstrap: [TodoView]
})
export class TodoListModule {
}