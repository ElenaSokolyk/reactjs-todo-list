import React from "react"
import { connect } from "react-redux"
import { ListGroup, ListGroupItem } from "react-bootstrap"
import TaskForm from "./TaskForm"
import filter from "lodash/filter"
import {
  addTaskAction,
  deleteTaskAction,
  completeChangeTaskAction
} from "./../../actions/tasks"
import TaskText from "./TaskText"
import sortBy from "lodash/sortBy"

const TaskList = props => {
  return (
    <ListGroup>
      {props.tasks.map(task => (
        <ListGroupItem key={task.id}>
          <TaskText
            task={task}
            onDelete={props.onDelete}
            onCompletionChange={props.onCompletionChange}
          />
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
  return { tasks: sortBy(tasks, ["id"]) }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onTaskSubmit: (projectId, task) => {
    dispatch(addTaskAction(projectId, task))
  },
  onDelete: taskId => {
    dispatch(deleteTaskAction(taskId))
  },
  onCompletionChange: taskId => {
    dispatch(completeChangeTaskAction(taskId))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskList)
