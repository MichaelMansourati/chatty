import React, {Component} from 'react';

class Message extends Component {
  render() {
    switch(this.props.uniqueMsg.type) {
      case "incomingMessage":
        return(
          <div className="message">
            <span className="message-username" value="">{this.props.uniqueMsg.username}</span>
            <span className="message-content" value="">{this.props.uniqueMsg.content}</span>
          </div>
        );
      break;

      case "incomingNotification":
        return(
          <div class="message system">{this.props.uniqueMsg.statement}</div>
        );
      break;

      default:
        throw new Error("unknown event type " + this.props.uniqueMsg.type);
    }
  }
}
export default Message;