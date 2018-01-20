import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../../actions/index';
import FIELDS from '../formFields';

// eslint-disable-next-line
class SurveyFormReview extends Component {
  static propTypes = {
    onCancel: PropTypes.func.isRequired,
    formValues: PropTypes.shape({
      title: PropTypes.string.isRequired,
      subject: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      recipients: PropTypes.string.isRequired,
    }).isRequired,
    submitSurvey: PropTypes.func.isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  handleSendSurvey = () => {
    const { submitSurvey, formValues, history: { push } } = this.props;
    submitSurvey(formValues, push);
  };

  renderFields = () => {
    const { formValues } = this.props;

    return FIELDS.map(({ label, htmlFor, name }) => (
      <div key={name}>
        <label htmlFor={htmlFor}>label</label>
        <div>{formValues[name]}</div>
      </div>
    ));
  };

  render() {
    return (
      <div>
        <h3>Survey Form Review</h3>
        {this.renderFields()}
        <button className="btn yellow darken-3" onClick={this.props.onCancel}>
          Back
        </button>
        <button
          className="btn waves-effect waves-light right"
          name="action"
          onClick={this.handleSendSurvey}
        >
          Send Survey
          <i className="material-icons right">send</i>
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values,
  };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
