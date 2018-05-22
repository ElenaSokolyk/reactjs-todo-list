let nextProjectId = 1

export const addProjectAction = project => ({
  type: "ADD_PROJECT",
  project: { id: nextProjectId++, text: project, tasks: [] }
})

export const deleteProjectAction = id => ({
  type: "DELETE_PROJECT",
  id: id
})
