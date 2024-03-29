import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import Todo from './todo';

@Injectable({
  providedIn: 'root',
})
export class TodoList {
  private readonly _todos = new BehaviorSubject<Todo[]>([]);

  get todos$() {
    return this._todos.asObservable();
  }

  get completedTodos$() {
    return this._todos
      .asObservable()
      .pipe(map((todos) => todos.filter((todo) => todo.done)));
  }

  get uncompletedTodos$() {
    return this._todos
      .asObservable()
      .pipe(map((todos) => todos.filter((todo) => !todo.done)));
  }

  get todos() {
    return this._todos.getValue();
  }

  set todos(todos: Todo[]) {
    this._todos.next(todos);
  }

  getById(id: string) {
    return this.todos.find((todo) => todo.id === id);
  }

  add(todo: Todo) {
    this.todos = [...this.todos, todo];
  }

  removeTodoById(id: string) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  toggleCompletedTodoById(id: string) {
    const todoFound = this.getById(id);
    if (!todoFound) throw new Error('Todo not found');
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
  }
}
