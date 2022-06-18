import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TodoComponent extends Component {
  @tracked newTodo = '';
  @tracked todos = [
    'delectus aut autem',
    'quis ut nam facilis et officia qui',
    'fugiat veniam minus',
    'et porro tempora',
    'laboriosam mollitia et enim quasi adipisci quia provident illum',
    'qui ullam ratione quibusdam voluptatem quia omnis',
    'illo expedita consequatur quia in',
  ];

  get todoList() {
    return this.todos;
  }

  @action createTodo(e) {
    e.preventDefault();
    this.todos = this.todos.concat(this.newTodo);
  }

  @action deleteTodo(todo) {
    this.todos = this.todos.filter((item) => item !== todo);
  }

  @action clearAll() {
    this.todos = [];
  }
}
