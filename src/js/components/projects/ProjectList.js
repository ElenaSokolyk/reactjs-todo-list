import React from "react"
import { connect } from "react-redux"
import { Panel, Grid } from "react-bootstrap"
import { deleteProjectAction } from "./../../actions/projects"
import TaskList from "./../tasks/TaskList"

const ProjectList = props => {
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
          <TaskList projectId={project.id} />
        </Panel>
      ))}
    </Grid>
  )
}

const mapStateToProps = (store, ownProps) => ({
  projects: store.projects
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDelete: project => {
    dispatch(deleteProjectAction(project.id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList)
