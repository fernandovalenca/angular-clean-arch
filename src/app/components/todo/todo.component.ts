import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';

import Todo from '../../domain/entities/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent {
  @Input() todo!: Todo;
  @Output() completed = new EventEmitter<Todo>();
  @Output() remove = new EventEmitter<string>();

  constructor() {}
}
