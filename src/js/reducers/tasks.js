import reject from "lodash/reject"
import find from "lodash/find"

export const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.task]
    case "DELETE_PROJECT":
      return reject(state, ["projectId", action.id])
    case "DELETE_TASK":
      return reject(state, ["id", action.id])
    case "UPDATE_TASK":
      let taskToUpdate = find(state, { id: action.id })
      let tasks = reject(state, ["id", action.id])
      taskToUpdate.text = action.text
      return [...tasks, taskToUpdate]
    default:
      return state
  }
}
