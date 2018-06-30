import React from "react"
import { connect } from "react-redux"
import { Modal, Button, FormControl } from "react-bootstrap"
import { addCommentAction } from "./../../actions/comments"
import CommentList from "./CommentList"
import Dropzone from "react-dropzone"
import "./../../../css/main.css"

class CommentsModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = { commentText: "", preview: "" }
  }

  addComment = e => {
    e.preventDefault()
    let comment = { text: this.state.commentText, preview: this.state.preview }
    this.props.onCommentSubmit(comment)
    this.setState({ commentText: "", preview: "" })
  }

  setComment = e => {
    this.setState({ commentText: e.target.value })
  }

  onDrop = files => {
    this.setState({ preview: files[0].preview })
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
            {this.state.preview ? (
              <img src={this.state.preview} width="100" />
            ) : (
              <Dropzone
                className="custom-dropzone"
                onDrop={files => this.onDrop(files)}>
                <div>
                  Try dropping some files here, or click to select files to
                  upload.
                </div>
              </Dropzone>
            )}
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
  onCommentSubmit: comment => {
    comment.taskId = ownProps.taskId
    dispatch(addCommentAction(comment))
  }
})

export default connect(null, mapDispatchToProps)(CommentsModal)
