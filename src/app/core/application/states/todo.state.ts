import { Injectable } from '@angular/core';
import { TodoList } from '../../domain/entities/todo-list';

@Injectable({
  providedIn: 'root',
})
export class TodoState {
  constructor(private _todoList: TodoList) {}

  readonly todos$ = this._todoList.todos$;
  readonly completedTodos$ = this._todoList.completedTodos$;
  readonly uncompletedTodos$ = this._todoList.uncompletedTodos$;
}
