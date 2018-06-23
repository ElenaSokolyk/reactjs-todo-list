let nextTaskId = 1

export const addTaskAction = (projectId, task) => ({
  type: "ADD_TASK",
  task: {
    id: nextTaskId++,
    text: task,
    projectId: projectId,
    completed: false,
    deadline: null
  }
})

export const deleteTaskAction = taskId => ({
  type: "DELETE_TASK",
  id: taskId
})

export const updateTaskAction = (taskId, taskName) => ({
  type: "UPDATE_TASK",
  id: taskId,
  text: taskName
})

export const completeChangeTaskAction = taskId => ({
  type: "COMPLETION_CHANGE_TASK",
  id: taskId
})

export const setTaskDeadlineAction = (taskId, taskDeadline) => ({
  type: "SET_TASK_DEADLINE",
  id: taskId,
  deadline: taskDeadline
})
