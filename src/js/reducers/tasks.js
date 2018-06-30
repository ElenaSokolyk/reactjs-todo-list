import reject from "lodash/reject"
import find from "lodash/find"

export const tasksReducer = (state = [], action) => {
  let task, tasks

  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.task]
    case "DELETE_PROJECT":
      return reject(state, ["projectId", action.id])
    case "DELETE_TASK":
      return reject(state, ["id", action.id])
    case "UPDATE_TASK":
      task = find(state, { id: action.id })
      tasks = reject(state, ["id", action.id])
      task.text = action.text
      return [...tasks, task]
    case "COMPLETION_CHANGE_TASK":
      task = find(state, { id: action.id })
      tasks = reject(state, ["id", action.id])
      task.completed = !task.completed
      return [...tasks, task]
    case "SET_TASK_DEADLINE":
      task = find(state, { id: action.id })
      tasks = reject(state, ["id", action.id])
      task.deadline = action.deadline
      return [...tasks, task]
    default:
      return state
  }
}
