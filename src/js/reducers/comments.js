import reject from "lodash/reject"

export const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      return [...state, action.comment]
    case "DELETE_COMMENT":
      return reject(state, ["id", action.id])
    default:
      return state
  }
}
