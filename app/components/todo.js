import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class TodoComponent extends Component {
  @tracked newTodo = '';
  @tracked todos = localStorage.getItem('todos')
    ? JSON.parse(localStorage.getItem('todos'))
    : [];

  get todoList() {
    return this.todos;
  }

  @action createTodo(e) {
    e.preventDefault();
    this.todos = this.todos.concat(this.newTodo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  @action deleteTodo(todo) {
    this.todos = this.todos.filter((item) => item !== todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  @action clearAll() {
    this.todos = [];
    localStorage.removeItem('todos', JSON.stringify(this.todos));
  }
}
