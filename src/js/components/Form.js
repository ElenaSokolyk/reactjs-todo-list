import React from "react"
import { connect } from "react-redux"
import { addProjectAction } from "./../actions/projects"
import { Grid, FormControl } from "react-bootstrap"

let input

const createProject = (e, onSubmit) => {
  e.preventDefault()
  onSubmit(input.value)
  input.value = ""
}

const Form = props => (
  <Grid>
    <form onSubmit={e => createProject(e, props.onSubmit)}>
      <FormControl type="text" inputRef={node => (input = node)} />
      <button>Add project</button>
    </form>
  </Grid>
)

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: project => {
    dispatch(addProjectAction(project))
  }
})

export default connect(null, mapDispatchToProps)(Form)
