import moment from "moment"

let nextCommentId = 1

export const addCommentAction = (commentText, taskId) => ({
  type: "ADD_COMMENT",
  comment: {
    id: nextCommentId++,
    text: commentText,
    taskId: taskId,
    createdAt: moment().format("DD/MM/YYYY, k:mm")
  }
})

export const deleteCommentAction = commentId => ({
  type: "DELETE_COMMENT",
  id: commentId
})
