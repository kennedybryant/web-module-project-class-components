import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';

const todo = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todo: todo
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  handleToggle = (id) => {
    this.setState({
      ...this.state,
      todo: this.state.todo.map(item => {
        if(item.id === id) {
          return ({
            ...item,
            completed: !item.completed
          });
        } else {
          return item;
        }
      })
    })
  }

  handleAddItem = (task) => {
    const newItem = {
      task: task,
      id: Date.now(),
      completed: false,
    }

    this.setState({
      ...this.state,
      todo: [...this.state.todo, newItem]
    });
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      todo:this.state.todo.filter(item => {
        return !item.completed;
      })
    });
  }
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
          <h3>Todo List:</h3>
            <TodoList handleClear={this.handleClear} handleToggle={this.handleToggle} todo={this.state.todo}/>
            <TodoForm handleAddItem={this.handleAddItem}/>
      </div>
    );
  }
}
export default App;
