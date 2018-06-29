let nextCommentId = 1

export const addCommentAction = (commentText, taskId) => ({
  type: "ADD_COMMENT",
  comment: { id: nextCommentId++, text: commentText, taskId: taskId }
})
