import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-todo-form',
  templateUrl: './create-todo-form.component.html',
  styleUrls: ['./create-todo-form.component.scss'],
})
export class CreateTodoFormComponent {
  @Input() createTodo!: FormControl;
  @Output() value = new EventEmitter<string>();
}
