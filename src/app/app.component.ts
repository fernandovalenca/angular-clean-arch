import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CreateTodoUseCase } from './core/application/use-cases/create-todo.usecase';
import { ToggleDoneUseCase } from './core/application/use-cases/toggle-done.usecase';
import { DataModule } from './core/data/data.module';
import { TodoState } from './core/application/states/todo.state';
import { ListTodosUseCase } from './core/application/use-cases/list-todos.usecase';
import { ComponentsModule } from './components/components.module';
import { RemoveTodoUseCase } from './core/application/use-cases/remove-todo.usecase';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DataModule, ComponentsModule],
  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  createTodoFormControl = new FormControl('', Validators.required);

  title = 'angular-clean-arch';

  constructor(
    public state: TodoState,
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
