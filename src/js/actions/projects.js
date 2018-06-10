let nextProjectId = 1

export const addProjectAction = project => ({
  type: "ADD_PROJECT",
  project: { id: nextProjectId++, text: project, tasks: [] }
})

export const deleteProjectAction = id => ({
  type: "DELETE_PROJECT",
  id: id
})

export const updateProjectAction = (projectId, projectName) => ({
  type: "UPDATE_PROJECT",
  id: projectId,
  text: projectName
})
