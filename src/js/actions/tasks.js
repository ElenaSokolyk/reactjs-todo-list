let nextTaskId = 1

export const addTaskAction = (projectId, task) => ({
  type: "ADD_TASK",
  task: { id: nextTaskId++, text: task, projectId: projectId }
})

export const deleteTaskAction = taskId => ({
  type: "DELETE_TASK",
  id: taskId
})
