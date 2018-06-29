import React, { Component } from "react"
import CreateProjectForm from "./js/components/projects/CreateProjectForm.js"
import ProjectList from "./js/components/projects/ProjectList.js"
import Dropzone from "react-dropzone"

class App extends Component {
  onDrop = files => {
    console.log(files)
  }

  render() {
    return (
      <div>
        <CreateProjectForm />
        <ProjectList />
        <Dropzone onDrop={files => this.onDrop(files)}>
          <div>
            Try dropping some files here, or click to select files to upload.
          </div>
        </Dropzone>
      </div>
    )
  }
}

export default App
