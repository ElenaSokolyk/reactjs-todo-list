import React from "react"
import { connect } from "react-redux"
import {
  Panel,
  Grid,
  ListGroup,
  ListGroupItem,
  FormControl
} from "react-bootstrap"
import { deleteProjectAction } from "./../actions/projects"
import { addTaskAction } from "./../actions/tasks"
import filter from "lodash/filter"

let taskName

const createTask = (e, onTaskSubmit, projectId) => {
  e.preventDefault()
  onTaskSubmit(projectId, taskName.value)
  taskName.value = ""
}

const List = props => {
  return (
    <Grid>
      {props.projects.map(project => (
        <Panel key={project.id}>
          <Panel.Heading>
            {project.text}
            <span className="pull-right" onClick={e => props.onDelete(project)}>
              &nbsp; Delete
            </span>
          </Panel.Heading>
          <ListGroup>
            {project.tasks.map(task => (
              <ListGroupItem key={task.id}>{task.text}</ListGroupItem>
            ))}
            <ListGroupItem>
              <form
                onSubmit={e => createTask(e, props.onTaskSubmit, project.id)}>
                <FormControl type="text" inputRef={node => (taskName = node)} />
                <button>Add task</button>
              </form>
            </ListGroupItem>
          </ListGroup>
        </Panel>
      ))}
    </Grid>
  )
}

// const mapStateToProps = (store, ownProps) => ({
//   projects: store.projects
// })

const mapStateToProps = (store, ownProps) => {
  let projects
  projects = store.projects.map(project => {
    let tasks = filter(store.tasks, { projectId: project.id })
    return { ...project, tasks: tasks }
  })
  return { projects: projects }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDelete: project => {
    dispatch(deleteProjectAction(project.id))
  },
  onTaskSubmit: (projectId, task) => {
    dispatch(addTaskAction(projectId, task))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
