import reject from "lodash/reject"
import find from "lodash/find"

export const projectsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      return [...state, action.project]
    case "DELETE_PROJECT":
      return reject(state, ["id", action.id])
    case "UPDATE_PROJECT":
      let projectToUpdate = find(state, { id: action.id })
      let projects = reject(state, ["id", action.id])
      projectToUpdate.text = action.text
      return [...projects, projectToUpdate]
    default:
      return state
  }
}
