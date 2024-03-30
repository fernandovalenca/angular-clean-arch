import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ApplicationModule } from './application/application.module';
import { ComponentsModule } from './components/components.module';
import { DataModule } from './data/data.module';
import { TodoList } from './domain/entities/todo-list';
import { ListTodosUseCase } from './application/use-cases/list-todos.usecase';
import { CreateTodoUseCase } from './application/use-cases/create-todo.usecase';
import { ToggleDoneUseCase } from './application/use-cases/toggle-done.usecase';
import { RemoveTodoUseCase } from './application/use-cases/remove-todo.usecase';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DataModule, ComponentsModule, ApplicationModule],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  createTodoFormControl = new FormControl('', Validators.required);

  title = 'angular-clean-arch';

  constructor(
    public state: TodoList,
    public listTodos: ListTodosUseCase,
    public createTodo: CreateTodoUseCase,
    public toggleDone: ToggleDoneUseCase,
    public removeTodo: RemoveTodoUseCase
  ) {}

  ngOnInit(): void {
    this.listTodos.execute();
  }

  create() {
    this.createTodo.execute('Novo to-do');
  }
}
