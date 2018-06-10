import React, { Component } from "react"
import CreateProjectForm from "./js/components/CreateProjectForm.js"
import List from "./js/components/List.js"

class App extends Component {
  render() {
    return (
      <div>
        <CreateProjectForm />
        <List />
      </div>
    )
  }
}

export default App
