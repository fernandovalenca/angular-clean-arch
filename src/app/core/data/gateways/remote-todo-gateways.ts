import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoGateway } from '../../domain/gateways/todos-gateway';

import Todo from '../../domain/entities/todo';
import { environment } from '../../../../environments/environments';

@Injectable({
  providedIn: 'root',
})
export class RemoteTodoGateway extends TodoGateway {
  constructor(private _http: HttpClient) {
    super();
  }
  getTodos() {
    return this._http.get<Todo[]>(`${environment.apiUrl}/todos`);
  }
  createTodo(todo: Todo): Observable<Todo> {
    return this._http.post<Todo>(`${environment.apiUrl}/todos`, todo);
  }
  updateTodo(todo: Todo): Observable<Todo> {
    return this._http.put<Todo>(`${environment.apiUrl}/todos/${todo.id}`, todo);
  }
  deleteTodoById(id: string): Observable<void> {
    return this._http.delete<void>(`${environment.apiUrl}/todos/${id}`);
  }
}
