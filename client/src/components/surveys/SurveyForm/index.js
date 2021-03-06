import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

import validateEmails from '../../../utils/validateEmails';
import SurveyField from '../SurveyField';
import FIELDS from '../formFields';

class SurveyForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    onSurveySubmit: PropTypes.func.isRequired,
  };

  handleFormSubmit = () => this.props.onSurveySubmit();

  renderFields = () =>
    FIELDS.map(({ label, htmlFor, name }) => (
      <Field
        key={htmlFor}
        label={label}
        htmlFor={htmlFor}
        type="text"
        name={name}
        component={SurveyField}
      />
    ));

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
        {this.renderFields()}
        <Link to="/surveys" className="btn red waves-effect waves-light">
          Cancel
        </Link>
        <button className="btn waves-effect waves-light right" type="submit" name="action">
          Next
          <i className="material-icons right">done</i>
        </button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  FIELDS.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = `You must provide a ${name}`;
    }
  });

  errors.recipients = validateEmails(values.recipients || '');

  return errors;
}

export default reduxForm({
  validate,
  form: 'surveyForm',
  destroyOnUnmount: false,
})(SurveyForm);
