import * as ActionTypes from './ActionTypes'

export const addTodo = (todo) => (dispatch) => {
  const newTodo = {
    activity: todo,
    complete: false,
  }
  dispatch(createTask(newTodo))
}

export const createTask = (todo) => ({
  // Task: Change this object to a redux action.
  type: ActionTypes.ADD_TODO,
  payload: todo,
})

export const toggleToDo = (index) => ({
  type: ActionTypes.TOGGLE_COMPLETE,
  payload: index,
})

export const clearAllTasks = () => ({
  type: ActionTypes.CLEAR_TASKS,
})

export const deleteAllTasks = () => ({
  // Task: Create an object to dispatch. use an object in this file as an example
  type: ActionTypes.DELETE_TASKS,
})

export const deleteTask = (index) => ({
  type: ActionTypes.DELETE_TASK,
  payload: index,
})
