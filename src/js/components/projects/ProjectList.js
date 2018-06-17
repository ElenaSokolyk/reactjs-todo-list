import React from "react"
import { connect } from "react-redux"
import { Panel, Grid } from "react-bootstrap"
import { deleteProjectAction } from "./../../actions/projects"
import TaskList from "./../tasks/TaskList"
import ProjectText from "./ProjectText"
import sortBy from "lodash/sortBy"

const ProjectList = props => {
  return (
    <Grid>
      {props.projects.map(project => (
        <Panel key={project.id}>
          <Panel.Heading>
            <ProjectText project={project} onDelete={props.onDelete} />
          </Panel.Heading>
          <TaskList projectId={project.id} />
        </Panel>
      ))}
    </Grid>
  )
}

const mapStateToProps = (store, ownProps) => ({
  projects: sortBy(store.projects, ["id"])
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDelete: project => {
    dispatch(deleteProjectAction(project.id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList)
