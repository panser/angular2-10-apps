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
    isEditMode: boolean;

    constructor(
        private _todoService: TodoService
    ) {
    }


    ngOnInit(): void {
        this.todos = [];
        this._todoService.getTodos()
            .map(res => res.json())
            .subscribe(todos => this.todos = todos);
    };

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
    };

    updateStatus(todo){
        var _todo = {
            _id: todo._id,
            text: todo.text,
            isCompleted: !todo.isCompleted
        };

        this._todoService.updateTodo(_todo)
            .map(res => res.json())
            .subscribe(data => {
                todo.isCompleted = !todo.isCompleted;
            });
    };

    setEditState(todo, state){
        if(state){
            todo.isEditMode = state;
        }else{
            delete todo.isEditMode;
        }
    };

    updateTodoText($event, todo){
        if($event.which === 13){
            todo.text = $event.target.value;
            var _todo = {
                _id: todo._id,
                text: todo.text,
                isCompleted: todo.isCompleted
            };

            this._todoService.updateTodo(_todo)
                .map(res => res.json())
                .subscribe(data => {
                    this.setEditState(todo, false)
                });

        }
    }

}
