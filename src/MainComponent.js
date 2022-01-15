import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo, clearAllTasks, toggleToDo, deleteAllTasks,
  createTask, 
  deleteTask} from './redux/ActionCreators'
// Task:  Import functions from ActionCreators

// Task: Assign reducer to prop
const mapStateToProps = (state) => {

  console.log('map state to props', state)
  return {
    ToDo: state.ToDo
  }
}

// Task: add functions to dispatch
const mapDispatchToProps = {
  addTodo: (todo) => addTodo(todo),

  createTask: (todo) => createTask(todo),

  toggleToDo: (index) => toggleToDo(index),

  clearAllTasks: () => clearAllTasks(),

  deleteAllTasks: () => deleteAllTasks(),

  deleteTask: (index) => deleteTask(index),




}

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoInput: '',
    }
  }

  handleSubmit() {
    if (this.state.todoInput.length > 0) {
      // Task: add a new line to dispatch the state value to the action creator
      this.props.addTodo(this.state.todoInput)
      //This line doesn't change
      this.setState({ todoInput: '' })
    }
  }

  render() {
    console.log('These are my props',this.props.ToDo.todo)
    return (
      <div className='App'>
        <h1>Redux To Do List</h1>
        <ul>
          {/* Task: create a map that displays the list item. don't forget the unique key. we will be using the index of the array*/}
         {this.props.ToDo.todo.map((task,index) => {
           return (
          <li key={index}>
            <input
              type='checkbox'
              // Task: replace true with the property used to show completion
              checked={task.complete}
              // Task: dispatch toggle instead of console.log. Use the index of the array
              onChange={() => this.props.toggleToDo(index)}
            />
            {/* Task: Replace this with task activity */}
            {task.activity}
            <button 
              onClick={() => this.props.deleteTask(index)}
            >
               Delete Task
            </button>
          </li>
          
         )})}

          <div className='AddField'>
            <input
              type='text'
              onChange={(e) => this.setState({ todoInput: e.target.value })}
              value={this.state.todoInput}
            />
            <div>
              <button onClick={() => this.handleSubmit()}>Add Task</button>
              <button onClick={() => this.props.clearAllTasks()}>
                Remove Completed
              </button>
              <button onClick={() => this.props.deleteAllTasks()}>
                Empty List
              </button>
            </div>
          </div>
          <div>
            <br />
            Redux Challenge
            <br />
            <br />
            <div style={{ justifyContent: 'center', display: 'flex' }}>
              <ol>
                <div style={{ margin: 10 }}>
                  This website is broken. We are missing some functionality and need your help fixing it.
                </div>
                <li>Tasks do not render on the page. There should be 2 when the page loads.</li>
                <li>Can't add tasks.</li>
                <li>The tasks do not toggle when clicked. This should be dispatched into redux.</li>
                <li>Completed tasks do not remove.</li>
                <li>All tasks do not remove.</li>
                <div>Extra:</div>
                <li>Ability to remove single tasks.</li>
              </ol>
            </div>
          </div>
        </ul>
      </div>
    )
  }
}

// Task: Connect this function to redux
export default connect(mapStateToProps, mapDispatchToProps)(Main)
