import React from 'react';
import PropTypes from 'prop-types';

const SurveyListItem = ({
  survey: {
    title, body, yes, no, dateSent, lastResponded,
  },
}) => (
  <div className="card blue-grey darken-1">
    <div className="card-content white-text">
      <span className="card-title">{title}</span>
      <p>{body}</p>
      <p className="right">{new Date(dateSent).toLocaleDateString()}</p>
    </div>
    <div className="card-action">
      <p>Yes: {yes}</p>
      <p>No: {no}</p>
      <p>Last responded: {new Date(lastResponded).toLocaleDateString()}</p>
    </div>
  </div>
);

SurveyListItem.propTypes = {
  survey: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    yes: PropTypes.number.isRequired,
    no: PropTypes.number.isRequired,
    dateSent: PropTypes.string.isRequired,
    lastResponded: PropTypes.string,
  }).isRequired,
};

SurveyListItem.defaultProp = {
  lastResponded: new Date(),
};

export default SurveyListItem;
