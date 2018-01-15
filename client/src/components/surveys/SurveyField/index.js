import React from 'react';
import PropTypes from 'prop-types';

const SurveyField = ({ input, label, htmlFor }) => (
  <div>
    <label htmlFor={htmlFor}>{label}</label>
    <input {...input} />
  </div>
);

SurveyField.propTypes = {
  input: PropTypes.shape({}).isRequired,
  label: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
};

export default SurveyField;
