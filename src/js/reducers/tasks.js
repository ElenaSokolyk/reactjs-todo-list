import reject from "lodash/reject"

export const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.task]
    case "DELETE_PROJECT":
      return reject(state, ["projectId", action.id])
    default:
      return state
  }
}
