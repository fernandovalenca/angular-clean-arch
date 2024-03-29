import { Injectable } from '@angular/core';
import Todo from '../../domain/entities/todo';
import { TodoList } from '../../domain/entities/todo-list';
import { TodoGateway } from '../../domain/gateways/todos-gateway';

@Injectable({
  providedIn: 'root',
})
export class ToggleDoneUseCase {
  constructor(private _todoGateway: TodoGateway, private _todoList: TodoList) {}

  execute(todo: Todo) {
    this._todoGateway.updateTodo({...todo, done: !todo.done}).subscribe((response) => {
      this._todoList.toggleCompletedTodoById(response.id!);
    });
  }
}
