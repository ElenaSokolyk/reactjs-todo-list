import React from "react"
import { Grid, FormControl } from "react-bootstrap"

class ProjectForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { projectName: "", errors: { projectName: "" } }
  }

  createProject = (e, onSubmit) => {
    e.preventDefault()
    if (this.state.projectName.length) {
      this.props.onSubmit(this.state.projectName)
      this.setState({ projectName: "", errors: { projectName: "" } })
    } else {
      this.setState({ errors: { projectName: "can't be blank" } })
    }
  }

  setProjectText = e => {
    this.setState({ projectName: e.target.value })
  }

  render() {
    return (
      <Grid>
        <form onSubmit={this.createProject}>
          <FormControl
            type="text"
            value={this.state.projectName}
            onChange={this.setProjectText}
          />
          <div className="text-danger">{this.state.errors.projectName}</div>
          <button>Add project</button>
        </form>
      </Grid>
    )
  }
}

export default ProjectForm
