import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../../actions';

class SurveyList extends Component {
  static propTypes = {
    fetchSurveys: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchSurveys();
  }

  render() {
    return <div>Survey List Component</div>;
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
