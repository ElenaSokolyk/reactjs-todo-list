import React from "react"
import { connect } from "react-redux"
import { ListGroup, ListGroupItem } from "react-bootstrap"
import TaskForm from "./TaskForm"
import filter from "lodash/filter"
import { addTaskAction, deleteTaskAction } from "./../../actions/tasks"

const TaskList = props => {
  return (
    <ListGroup>
      {props.tasks.map(task => (
        <ListGroupItem key={task.id}>
          {task.text}
          <span className="pull-right" onClick={e => props.onDelete(task.id)}>
            &nbsp; Delete
          </span>
        </ListGroupItem>
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
  },
  onDelete: taskId => {
    dispatch(deleteTaskAction(taskId))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)
