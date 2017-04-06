import React, {Component} from 'react';

class Message extends Component {
  render() {
    return(
      <div className="message">
        <span className="message-username" value="">{this.props.uniqueMsg.username}</span>
        <span className="message-content" value="">{this.props.uniqueMsg.content}</span>
      </div>
    );
  }
}
export default Message;