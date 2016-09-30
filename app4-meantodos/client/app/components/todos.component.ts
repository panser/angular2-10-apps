import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

import {Todo} from '../Todo';
import {TodoService} from '../services/todo.service';

@Component({
    moduleId: module.id,
    selector: 'todos',
    templateUrl: 'todos.component.html',
    providers: [],
})
export class TodosComponent implements OnInit{
    todos: Todo[];

    constructor(
        private _todoService: TodoService
    ) {
    }


    ngOnInit(): void {
        this.todos = [];
        this._todoService.getTodos()
            .map(res => res.json())
            .subscribe(todos => this.todos = todos);
    }

    addTodo($event, todoText){
        if($event.which === 1){
            var result;
            var newTodo = {
                text: todoText.value,
                isCompleted: false
            };

            result = this._todoService.saveTodo(newTodo);
            result.subscribe(x => {
                this.todos.push(newTodo);
                todoText.value = '';
            })
        }
    }
}
