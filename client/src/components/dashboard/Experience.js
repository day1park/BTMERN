import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

class Experience extends Component {
  render() {
    return (
      <div>
        <h1> experience component</h1>
      </div>
    );
  }
}

export default connect(null)(withRouter(Experience));
