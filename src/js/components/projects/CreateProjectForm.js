import { connect } from "react-redux"
import { addProjectAction } from "./../../actions/projects"
import ProjectForm from "./ProjectForm"

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: project => {
    dispatch(addProjectAction(project))
  }
})

export default connect(null, mapDispatchToProps)(ProjectForm)
