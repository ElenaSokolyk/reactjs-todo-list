import React from "react"
import { connect } from "react-redux"
import { ListGroup, ListGroupItem } from "react-bootstrap"
import TaskForm from "./TaskForm"
import filter from "lodash/filter"
import { addTaskAction } from "./../../actions/tasks"

const TaskList = props => {
  return (
    <ListGroup>
      {props.tasks.map(task => (
        <ListGroupItem key={task.id}>{task.text}</ListGroupItem>
      ))}
      <ListGroupItem>
        <TaskForm
          projectId={props.projectId}
          onTaskSubmit={props.onTaskSubmit}
        />
      </ListGroupItem>
    </ListGroup>
  )
}

const mapStateToProps = (store, ownProps) => {
  let tasks = filter(store.tasks, { projectId: ownProps.projectId })
  return { tasks: tasks }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onTaskSubmit: (projectId, task) => {
    dispatch(addTaskAction(projectId, task))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)
