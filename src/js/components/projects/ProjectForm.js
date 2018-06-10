import React from "react"
import { Grid, FormControl } from "react-bootstrap"

const ProjectForm = props => {
  let input

  const createProject = (e, onSubmit) => {
    e.preventDefault()
    onSubmit(input.value)
    input.value = ""
  }

  return (
    <Grid>
      <form onSubmit={e => createProject(e, props.onSubmit)}>
        <FormControl type="text" inputRef={node => (input = node)} />
        <button>Add project</button>
      </form>
    </Grid>
  )
}

export default ProjectForm