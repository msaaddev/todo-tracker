import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos'
      );
      let todos = await response.json();
      todos = todos.slice(0, 10);
      return todos;
    } catch (err) {
      console.log(err);
    }
  }
}
