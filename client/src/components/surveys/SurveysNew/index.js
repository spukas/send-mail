import React, { Component } from 'react';

import SurveyForm from '../SurveyForm';
import SurveyFormReview from '../SurveyFormReview';

class SurveyNew extends Component {
  state = {
    showReview: false,
  };

  toggleShowReview = () =>
    this.setState(prev => ({
      showReview: !prev.showReview,
    }));

  renderContent = () => {
    if (this.state.showReview) {
      return <SurveyFormReview onCancel={this.toggleShowReview} />;
    }

    return <SurveyForm onSurveySubmit={this.toggleShowReview} />;
  };

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default SurveyNew;
