import React from "react"
import { FormControl } from "react-bootstrap"

let taskName

const createTask = (e, onTaskSubmit, projectId) => {
  e.preventDefault()
  onTaskSubmit(projectId, taskName.value)
  taskName.value = ""
}

const TaskForm = props => {
  return (
    <form onSubmit={e => createTask(e, props.onTaskSubmit, props.projectId)}>
      <FormControl type="text" inputRef={node => (taskName = node)} />
      <button>Add task</button>
    </form>
  )
}

export default TaskForm
