import { RemoveTodoUseCase } from './../application/use-cases/remove-todo.usecase';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Provider } from '@angular/core';
import { CreateTodoUseCase } from '../application/use-cases/create-todo.usecase';
import { ToggleDoneUseCase } from '../application/use-cases/toggle-done.usecase';
import { TodoList } from '../domain/entities/todo-list';
import { TodoGateway } from '../domain/gateways/todos-gateway';
import { RemoteTodoGateway } from './gateways/remote-todo-gateways';
import { ListTodosUseCase } from '../application/use-cases/list-todos.usecase';

const createTodoUseCaseFactory = (
  todoGateway: TodoGateway,
  todoState: TodoList
) => new CreateTodoUseCase(todoGateway, todoState);
export const createTodoUseCaseProvider: Provider = {
  provide: CreateTodoUseCase,
  useFactory: createTodoUseCaseFactory,
  deps: [TodoGateway, TodoList],
};

const toggleDoneTodoFactory = (todoGateway: TodoGateway, todoState: TodoList) =>
  new ToggleDoneUseCase(todoGateway, todoState);
export const toggleDoneTodoUseCaseProvider: Provider = {
  provide: ToggleDoneUseCase,
  useFactory: toggleDoneTodoFactory,
  deps: [TodoGateway, TodoList],
};

const listTodosFactory = (todoGateway: TodoGateway, todoState: TodoList) =>
  new ListTodosUseCase(todoGateway, todoState);
export const ListTodosUseCaseProvider: Provider = {
  provide: ListTodosUseCase,
  useFactory: listTodosFactory,
  deps: [TodoGateway, TodoList],
};

const removeTodoFactory = (todoGateway: TodoGateway, todoState: TodoList) =>
  new RemoveTodoUseCase(todoGateway, todoState);
export const RemoveTodoUseCaseProvider: Provider = {
  provide: RemoveTodoUseCase,
  useFactory: removeTodoFactory,
  deps: [TodoGateway, TodoList],
};

const RemoteTodoProvider: Provider = {
  provide: TodoGateway,
  useClass: RemoteTodoGateway,
};

@NgModule({
  providers: [
    createTodoUseCaseProvider,
    toggleDoneTodoUseCaseProvider,
    ListTodosUseCaseProvider,
    RemoveTodoUseCaseProvider,
    RemoteTodoProvider,
  ],
  imports: [CommonModule, HttpClientModule],
})
export class DataModule {}
