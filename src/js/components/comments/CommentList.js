import React from "react"
import { connect } from "react-redux"
import sortBy from "lodash/sortBy"
import filter from "lodash/filter"

const CommentList = props => {
  return (
    <div>
      {props.comments.map(comment => (
        <div key={comment.id}>{comment.text}</div>
      ))}
    </div>
  )
}

const mapStateToProps = (store, ownProps) => {
  let comments = filter(store.comments, { taskId: ownProps.taskId })
  return { comments: sortBy(comments, ["id"]) }
}

export default connect(mapStateToProps, null)(CommentList)
