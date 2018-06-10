import reject from "lodash/reject"

export const projectsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      return [...state, action.project]
    case "DELETE_PROJECT":
      return reject(state, ["id", action.id])
    default:
      return state
  }
}
