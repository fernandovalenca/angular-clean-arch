import { NgModule, Provider } from '@angular/core';
import { ListTodosUseCase } from './use-cases/list-todos.usecase';
import { TodoGateway } from '../domain/gateways/todos-gateway';
import { TodoList } from '../domain/entities/todo-list';
import { RemoveTodoUseCase } from './use-cases/remove-todo.usecase';
import { ToggleDoneUseCase } from './use-cases/toggle-done.usecase';
import { CreateTodoUseCase } from './use-cases/create-todo.usecase';

const CREATE_TODO_USE_CASE_FACTORY = (
  todoGateway: TodoGateway,
  todoState: TodoList
) => new CreateTodoUseCase(todoGateway, todoState);
export const CREATE_TODO_PROVIDER: Provider = {
  provide: CreateTodoUseCase,
  useFactory: CREATE_TODO_USE_CASE_FACTORY,
  deps: [TodoGateway, TodoList],
};

const TOGGLE_TODO_USE_CASE_FACTORY = (
  todoGateway: TodoGateway,
  todoState: TodoList
) => new ToggleDoneUseCase(todoGateway, todoState);
export const TOGGLE_TODO_PROVIDER: Provider = {
  provide: ToggleDoneUseCase,
  useFactory: TOGGLE_TODO_USE_CASE_FACTORY,
  deps: [TodoGateway, TodoList],
};

const LIST_TODOS_USE_CASE_FACTORY = (
  todoGateway: TodoGateway,
  todoState: TodoList
) => new ListTodosUseCase(todoGateway, todoState);
export const LIST_TODOS_PROVIDER: Provider = {
  provide: ListTodosUseCase,
  useFactory: LIST_TODOS_USE_CASE_FACTORY,
  deps: [TodoGateway, TodoList],
};

const REMOVE_TODO_USE_CASE_FACTORY = (
  todoGateway: TodoGateway,
  todoState: TodoList
) => new RemoveTodoUseCase(todoGateway, todoState);
export const REMOVE_TODO_PROVIDER: Provider = {
  provide: RemoveTodoUseCase,
  useFactory: REMOVE_TODO_USE_CASE_FACTORY,
  deps: [TodoGateway, TodoList],
};

const LIST_TODOS_USE_CASE_PROVIDER = (
  todosGateway: TodoGateway,
  todoList: TodoList
) => new ListTodosUseCase(todosGateway, todoList);
export const ListTodosUseCaseProvier: Provider = {
  provide: ListTodosUseCase,
  useFactory: LIST_TODOS_USE_CASE_PROVIDER,
  deps: [TodoGateway, TodoList],
};

@NgModule({
  providers: [
    LIST_TODOS_PROVIDER,
    CREATE_TODO_PROVIDER,
    TOGGLE_TODO_PROVIDER,
    REMOVE_TODO_PROVIDER,
  ],
  imports: [],
})
export class ApplicationModule {}
