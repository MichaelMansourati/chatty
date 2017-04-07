import React, {Component} from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
        <span className="navbar-users">Active Users: {this.props.activeUsersNumProp}</span>
      </nav>
    )
  }
}

export default Navbar