import React, { Component } from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line
class SurveyFormReview extends Component {
  static propTypes = {
    onCancel: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div>
        <h3>Survey Form Review</h3>
        <button className="yellow darken-3 btn-flat" onClick={this.props.onCancel}>
          Cancel
        </button>
      </div>
    );
  }
}

export default SurveyFormReview;
