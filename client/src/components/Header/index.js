import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from '../Payments';

class Header extends Component {
  renderContent = () => {
    const { auth } = this.props;
    console.log({ auth });
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
