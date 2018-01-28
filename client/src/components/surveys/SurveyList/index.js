import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchSurveys } from '../../../actions';
import SurveyListItem from '../SurveyListItem';

class SurveyList extends Component {
  static propTypes = {
    fetchSurveys: PropTypes.func.isRequired,
    surveys: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  };

  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys = () =>
    this.props.surveys.map(survey => <SurveyListItem key={survey._id} survey={survey} />);

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
