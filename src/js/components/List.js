import React from "react"
import { connect } from "react-redux"
import { Panel, Grid, ListGroup, ListGroupItem } from "react-bootstrap"
import { deleteProjectAction } from "./../actions/projects"

const List = props => {
  return (
    <Grid>
      {props.projects.map((item, index) => (
        <Panel key={index}>
          <Panel.Heading>
            {item.text}
            <span className="pull-right" onClick={e => props.onDelete(item)}>
              &nbsp; Delete
            </span>
          </Panel.Heading>
          <ListGroup>
            {item.tasks.map((task, index) => (
              <ListGroupItem>{task}</ListGroupItem>
            ))}
            <ListGroupItem>
              <form>
                <input />
                <button>Add task</button>
              </form>
            </ListGroupItem>
          </ListGroup>
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

export default connect(mapStateToProps, mapDispatchToProps)(List)
