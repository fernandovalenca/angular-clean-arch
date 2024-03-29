import { Observable } from 'rxjs';
import Todo from '../entities/todo';

export abstract class TodoGateway {
  abstract getTodos(): Observable<Todo[]>;
  abstract createTodo(todo: Todo): Observable<Todo>;
  abstract updateTodo(todo: Todo): Observable<Todo>;
  abstract deleteTodoById(id: string): Observable<void>;
}
