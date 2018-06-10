import React, { Component } from "react"
import CreateProjectForm from "./js/components/projects/CreateProjectForm.js"
import ProjectList from "./js/components/projects/ProjectList.js"

class App extends Component {
  render() {
    return (
      <div>
        <CreateProjectForm />
        <ProjectList />
      </div>
    )
  }
}

export default App
