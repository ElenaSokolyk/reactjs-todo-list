import React from "react"
import { connect } from "react-redux"
import sortBy from "lodash/sortBy"
import filter from "lodash/filter"
import { Glyphicon } from "react-bootstrap"
import { deleteCommentAction } from "./../../actions/comments"

const CommentList = props => {
  const onDelete = commentId => {
    props.onDelete(commentId)
  }

  return (
    <div className="pull-left" style={{ textAlign: "left" }}>
      {props.comments.map(comment => (
        <p key={comment.id}>
          <span>{comment.text}</span>
          <span className="text-muted" style={{ marginLeft: "10px" }}>
            {comment.createdAt}
          </span>
          <Glyphicon
            className="text-muted"
            style={{ marginLeft: "10px" }}
            glyph="trash"
            onClick={e => onDelete(comment.id)}
          />
          <br />
          <img src={comment.preview} width="100" alt="" />
        </p>
      ))}
    </div>
  )
}

const mapStateToProps = (store, ownProps) => {
  let comments = filter(store.comments, { taskId: ownProps.taskId })
  return { comments: sortBy(comments, ["id"]) }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDelete: commentId => {
    dispatch(deleteCommentAction(commentId))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentList)
