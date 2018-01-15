import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';

import SurveyField from '../SurveyField';

const FIELDS = [
  { label: 'Survey label', htmlFor: 'surveyLavel', name: 'title' },
  { label: 'Subject line', htmlFor: 'subjectLine', name: 'subject' },
  { label: 'Email body', htmlFor: 'emailBody', name: 'body' },
  { label: 'Recipient list', htmlFor: 'recipientList', name: 'emails' },
];

class SurveyForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  };

  handleFormSubmit = value => console.log(value);

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
        <button className="btn waves-effect waves-light" type="submit" name="action">
          Submit
          <i className="material-icons right">send</i>
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'surveyForm',
})(SurveyForm);
