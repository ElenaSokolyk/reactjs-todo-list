import React from "react"
import PropTypes from "prop-types"
import EditTaskForm from "./EditTaskForm"
import { Glyphicon, Popover, OverlayTrigger, Button } from "react-bootstrap"
import Datetime from "react-datetime"

class TaskText extends React.Component {
  constructor(props) {
    super(props)
    this.state = { editMode: false }
  }

  toggleEditMode = () => {
    this.setState({ editMode: !this.state.editMode })
  }

  setDeadline = () => {
    console.log(this.props.task)
    this.props.onSetDeadline(this.props.task.id, this.props.task.deadline)
  }

  deadline = this.props.task.deadline // TODO: move to state

  changeDate = date => {
    this.props.task.deadline = date.format("DD/MM/YYYY, HH:mm")
  }

  render() {
    const popoverClickRootClose = (
      <Popover id="popover-trigger-click-root-close" title="Deadline">
        <Datetime
          value={this.deadline}
          onChange={this.changeDate}
          dateFormat="DD/MM/YYYY"
          timeFormat="HH:mm"
        />
        <Button onClick={e => this.setDeadline()}>Save</Button>
      </Popover>
    )
    if (this.state.editMode) {
      return (
        <EditTaskForm task={this.props.task} closeForm={this.toggleEditMode} />
      )
    } else {
      return (
        <div className="clearfix">
          <div className="pull-left">
            <input
              type="checkbox"
              checked={this.props.task.completed}
              onChange={e => this.props.onCompletionChange(this.props.task.id)}
            />
            <span
              style={{
                textDecoration: this.props.task.completed
                  ? "line-through"
                  : "none",
                marginLeft: "10px"
              }}>
              {this.props.task.text}
            </span>
            <div style={{ color: "green" }}>{this.props.task.deadline}</div>
          </div>
          <div className="pull-right">
            <OverlayTrigger
              trigger="click"
              rootClose
              placement="bottom"
              overlay={popoverClickRootClose}>
              <Glyphicon style={{ marginRight: "10px" }} glyph="time" />
            </OverlayTrigger>
            <span onClick={this.toggleEditMode} style={{ marginRight: "10px" }}>
              <Glyphicon glyph="pencil" />
            </span>
            <span onClick={e => this.props.onDelete(this.props.task.id)}>
              <Glyphicon glyph="trash" />
            </span>
          </div>
        </div>
      )
    }
  }
}

export default TaskText
