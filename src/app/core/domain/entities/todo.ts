import { uuid } from '../../shared/helpers/uuid';

export default class Todo {
  constructor(public title: string, public done: boolean, public id?: string) {
    if (!id) this.id = uuid();
  }

  static create(title: string): Todo {
    return new Todo(title, false);
  }
}
