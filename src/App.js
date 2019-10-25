import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas, tachar y destacharlas y error de validacion en el input

class App extends Component {
  constructor() {
    super()
    this.state = {
      tasks: [
        { id: 1, name: "Sacar la ropa", done: false },
        { id: 2, name: "Hacer la cama", done: true },
        { id: 3, name: "Leer un rato", done: false }
      ],
      newTask: ''
    }
  }

  handleChange = (event) => {
    this.setState({ newTask: event.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState(state => {
      const tasks = state.tasks.concat({ id: this.state.tasks.length + 1, name: this.state.newTask, done: false });
      return {
        tasks,
        newTask: '',
      };
    });
  }

  toggleDone = (id) => {
    this.setState(state => {
      const tasks = state.tasks.map((item, index) => {
        if (index === id) {
          item.done=!item.done       
         return item;
        } else{
          return item
        }
      });
      return {
        tasks,
      };
    });
  };

  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            {this.state.tasks.map((task, index) => <li key={task.id} onClick={() => this.toggleDone(index)} className={task.done ? 'done' : ''} >{task.name}</li>)}
          </ul>
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} className={this.state.newTask === '' ? 'error' : ''} type="text" id="new-task" placeholder="Ingresa una tarea y oprime Enter" value={this.state.newTask} />
          </form>
        </div>
      </div>
    )
  }
}

export default App;
