import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class SurveyForm extends Component {
  render() {
    return <h3>SurveyForm Component</h3>;
  }
}

export default reduxForm({
  form: 'surveyForm',
})(SurveyForm);
