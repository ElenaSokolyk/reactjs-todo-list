import React from "react"
import EditProjectForm from "./EditProjectForm"

class ProjectText extends React.Component {
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
        <EditProjectForm
          project={this.props.project}
          closeForm={this.toggleEditMode}
        />
      )
    } else {
      return (
        <div>
          <span>{this.props.project.text}</span>
          <div className="pull-right">
            <span onClick={this.toggleEditMode}>&nbsp; Edit</span>
            <span onClick={e => this.props.onDelete(this.props.project)}>
              &nbsp; Delete
            </span>
          </div>
        </div>
      )
    }
  }
}

export default ProjectText
