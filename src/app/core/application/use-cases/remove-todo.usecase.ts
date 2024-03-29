import { TodoList } from '../../domain/entities/todo-list';
import { TodoGateway } from '../../domain/gateways/todos-gateway';

export class RemoveTodoUseCase {
  constructor(private todoGateway: TodoGateway, private todoState: TodoList) {}

  execute(id: string) {
    this.todoGateway.deleteTodoById(id).subscribe(() => {
      this.todoState.removeTodoById(id);
    });
  }
}
