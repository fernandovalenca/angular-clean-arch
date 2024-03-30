import { Injectable } from '@angular/core';

import Todo from '../../domain/entities/todo';
import { TodoGateway } from '../../domain/gateways/todos-gateway';
import { TodoList } from '../../domain/entities/todo-list';

@Injectable({
  providedIn: 'root',
})
export class CreateTodoUseCase {
  constructor(private _todoGateway: TodoGateway, private _todoList: TodoList) {}

  execute(title: string) {
    const todo = Todo.create(title);
    return this._todoGateway
      .createTodo(todo)
      .subscribe((response) => this._todoList.add(response));
  }
}
