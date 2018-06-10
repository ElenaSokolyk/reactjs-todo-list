import React from "react"
import { connect } from "react-redux"
import { updateProjectAction } from "./../../actions/projects"
import { FormControl } from "react-bootstrap"

const EditProjectForm = props => {
  let newProjectName

  const updateProject = (e, projectId, onUpdate) => {
    e.preventDefault()
    onUpdate(projectId, newProjectName.value)
  }

  return (
    <form onSubmit={e => updateProject(e, props.project.id, props.onUpdate)}>
      <FormControl
        type="text"
        defaultValue={props.project.text}
        inputRef={node => (newProjectName = node)}
      />
      <button>Update project</button>
    </form>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onUpdate: (projectId, projectName) => {
    dispatch(updateProjectAction(projectId, projectName))
  }
})

export default connect(null, mapDispatchToProps)(EditProjectForm)
