import React from "react"
import { connect } from "react-redux"
import { Modal, Button, FormControl } from "react-bootstrap"
import { addCommentAction } from "./../../actions/comments"
import CommentList from "./CommentList"

class CommentsModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = { commentText: "" }
  }

  addComment = e => {
    e.preventDefault()
    this.props.onCommentSubmit(this.state.commentText)
    this.setState({ commentText: "" })
  }

  setComment = e => {
    this.setState({ commentText: e.target.value })
  }

  render() {
    return (
      <Modal show={this.props.open} onHide={this.props.onClose}>
        <form onSubmit={this.addComment}>
          <Modal.Header closeButton>
            <Modal.Title>Add Comment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormControl
              componentClass="textarea"
              placeholder="Enter your comment"
              value={this.state.commentText}
              onChange={this.setComment}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onClose}>Close</Button>
            <Button type="submit" bsStyle="primary">
              Save
            </Button>
            <hr />
            <CommentList taskId={this.props.taskId} />
          </Modal.Footer>
        </form>
      </Modal>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onCommentSubmit: commentText => {
    dispatch(addCommentAction(commentText, ownProps.taskId))
  }
})

export default connect(null, mapDispatchToProps)(CommentsModal)
