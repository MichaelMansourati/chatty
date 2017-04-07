import React, {Component} from 'react';

class ChatBar extends Component {
  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder="Your Name (Optional)" onKeyPress={this.props.onEnterUsername} defaultValue={this.props.currentUser}/>
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress={this.props.onEnterNewMsg} />
      </footer>
    );
  }
}

export default ChatBar;