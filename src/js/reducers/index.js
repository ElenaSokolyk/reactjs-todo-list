import { combineReducers } from "redux"
import { projectsReducer } from "./projects"
import { tasksReducer } from "./tasks"
import { commentsReducer } from "./comments"

export default combineReducers({
  projects: projectsReducer,
  tasks: tasksReducer,
  comments: commentsReducer
})
