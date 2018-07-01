import React from "react"
import { FormControl } from "react-bootstrap"

class TaskForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { taskName: "", errors: { taskName: "" } }
  }

  createTask = (e, onTaskSubmit, projectId) => {
    e.preventDefault()
    if (this.state.taskName.length) {
      this.props.onTaskSubmit(this.props.projectId, this.state.taskName)
      this.setState({ taskName: "", errors: { taskName: "" } })
    } else {
      this.setState({ errors: { taskName: "can't be blank" } })
    }
  }

  setTaskName = e => {
    this.setState({ taskName: e.target.value })
  }

  render() {
    return (
      <form onSubmit={this.createTask}>
        <FormControl
          type="text"
          value={this.state.taskName}
          onChange={this.setTaskName}
        />
        <div className="text-danger">{this.state.errors.taskName}</div>

        <button>Add task</button>
      </form>
    )
  }
}

export default TaskForm
