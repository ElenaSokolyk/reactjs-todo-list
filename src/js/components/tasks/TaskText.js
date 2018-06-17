import React from "react"
import PropTypes from "prop-types"
import EditTaskForm from "./EditTaskForm"

class TaskText extends React.Component {
  constructor(props) {
    super(props)
    this.state = { editMode: false }
  }

  toggleEditMode = () => {
    this.setState({ editMode: !this.state.editMode })
  }

  render() {
    if (this.state.editMode) {
      return (
        <EditTaskForm task={this.props.task} closeForm={this.toggleEditMode} />
      )
    } else {
      return (
        <div>
          <span>{this.props.task.text}</span>
          <div className="pull-right">
            <span onClick={this.toggleEditMode}>&nbsp; Edit</span>
            <span onClick={e => this.props.onDelete(this.props.task)}>
              &nbsp; Delete
            </span>
          </div>
        </div>
      )
    }
  }
}

export default TaskText
