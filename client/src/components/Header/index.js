import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from '../Payments';
import './index.css';

class Header extends Component {
  static propTypes = {
    auth: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  };

  static defaultProps = {
    auth: null,
  };

  renderContent = () => {
    const { auth } = this.props;
    const content = () => {
      if (auth === null) {
        return null;
      } else if (auth === false) {
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      }

      return [
        <li key="1">
          <Payments />
        </li>,
        <li key="3" className="header__list-item--space">
          Credits: {auth.credits}
        </li>,
        <li key="2">
          <a href="/api/logout">Logout</a>
        </li>,
      ];
    };
    return <ul className="right">{content()}</ul>;
  };

  renderLogo = () => (
    <Link to={this.props.auth ? '/surveys' : '/'} className="left brand-logo">
      Emaily
    </Link>
  );

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          {this.renderLogo()}
          {this.renderContent()}
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
