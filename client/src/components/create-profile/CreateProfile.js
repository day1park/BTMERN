import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

class CreateProfile extends Component {
  //component state values fields
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      handle: '',
      company: '',
      website: '',
      location: '',
      status: '',
      skills: '',
      githubusername: '',
      bio: '',
      twitter: '',
      facebook: '',
      linkedin: '',
      youtube: '',
      instagram: '',
      errors: {}
    }
  }
  render() {
    return (
      <div>
        <h1>hello universe</h1>
      </div>
    )
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state = > ({
  profile: state.profile,
  errors: state.errors
})

export default connect(null)(CreateProfile)