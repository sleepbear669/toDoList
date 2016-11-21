import 'zone.js';
import 'reflect-metadata';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { TodoListModule } from './todo-list/todo-list.module';

const platform = platformBrowserDynamic();

platform.bootstrapModule(TodoListModule);