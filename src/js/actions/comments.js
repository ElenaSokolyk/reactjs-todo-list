import moment from "moment"

let nextCommentId = 1

export const addCommentAction = comment => ({
  type: "ADD_COMMENT",
  comment: {
    id: nextCommentId++,
    text: comment.text,
    taskId: comment.taskId,
    createdAt: moment().format("DD/MM/YYYY, k:mm"),
    preview: comment.preview
  }
})

export const deleteCommentAction = commentId => ({
  type: "DELETE_COMMENT",
  id: commentId
})
