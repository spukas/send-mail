import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const SurveyField = ({
  input, label, htmlFor, meta: { error, touched },
}) => (
  <div>
    <label htmlFor={htmlFor}>{label}</label>
    <input {...input} className="survey-field__input--space" />
    <div className="red-text survey-field__error--space">{touched && error}</div>
  </div>
);

SurveyField.propTypes = {
  input: PropTypes.shape({}).isRequired,
  label: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
  meta: PropTypes.shape({}).isRequired,
};

export default SurveyField;
