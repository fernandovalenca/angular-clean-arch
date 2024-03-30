import { NgModule, Provider } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TodoGateway } from '../domain/gateways/todos-gateway';
import { RemoteTodoGateway } from './gateways/remote-todo-gateways';

const RemoteTodoProvider: Provider = {
  provide: TodoGateway,
  useClass: RemoteTodoGateway,
};

@NgModule({
  providers: [RemoteTodoProvider],
  imports: [HttpClientModule],
})
export class DataModule {}
