import React, { Component } from 'react';

import SurveyForm from '../SurveyForm';
import SurveyFormReview from '../SurveyFormReview';

class SurveyNew extends Component {
  state = {
    showReview: false,
  };

  handleSurveySubmit = () => this.setState({ showReview: true });

  renderContent = () => {
    if (this.state.showReview) {
      return <SurveyFormReview />;
    }

    return <SurveyForm onSurveySubmit={this.handleSurveySubmit} />;
  };

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default SurveyNew;
