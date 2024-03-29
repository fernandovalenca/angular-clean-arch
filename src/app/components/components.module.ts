import {
  heroCheck,
  heroTrash,
  heroPlusCircle,
} from '@ng-icons/heroicons/outline';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TodoComponent } from './todo/todo.component';
import { CreateTodoFormComponent } from './create-todo-form/create-todo-form.component';
import { NgIconsModule } from '@ng-icons/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoComponent, CreateTodoFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgIconsModule.withIcons({
      heroCheck,
      heroTrash,
      heroPlusCircle,
    }),
  ],
  providers: [],
  exports: [TodoComponent, CreateTodoFormComponent],
  bootstrap: [],
})
export class ComponentsModule {}
