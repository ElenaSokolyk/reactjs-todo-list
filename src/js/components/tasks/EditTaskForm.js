import React from "react"
import { connect } from "react-redux"
import { updateTaskAction } from "./../../actions/tasks"
import { FormControl } from "react-bootstrap"

const EditTaskForm = props => {
  let newTaskName

  const updateTask = (e, taskId, onUpdate) => {
    e.preventDefault()
    onUpdate(taskId, newTaskName.value)
    props.closeForm()
  }

  return (
    <form onSubmit={e => updateTask(e, props.task.id, props.onUpdate)}>
      <FormControl
        type="text"
        defaultValue={props.task.text}
        inputRef={node => (newTaskName = node)}
      />
      <button>Update task</button>
    </form>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onUpdate: (taskId, taskName) => {
    dispatch(updateTaskAction(taskId, taskName))
  }
})

export default connect(null, mapDispatchToProps)(EditTaskForm)
