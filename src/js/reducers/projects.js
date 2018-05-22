import reject from "lodash/reject"

export const projectsReducer = (state = { projects: [] }, action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      return { projects: [...state.projects, action.project] }
    case "DELETE_PROJECT":
      return { projects: reject(state.projects, ["id", action.id]) }
    default:
      return state
  }
}
