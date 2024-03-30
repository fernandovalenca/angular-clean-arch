import { Injectable } from '@angular/core';
import { TodoGateway } from '../../domain/gateways/todos-gateway';
import { TodoList } from '../../domain/entities/todo-list';

@Injectable({
  providedIn: 'root',
})
export class ListTodosUseCase {
  constructor(private _todoGateway: TodoGateway, private _todoList: TodoList) {}

  execute() {
    this._todoGateway.getTodos().subscribe((todos) => {
      this._todoList.todos = todos;
    });
  }
}
