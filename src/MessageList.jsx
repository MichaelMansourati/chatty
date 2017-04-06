import React, {Component} from 'react';

import Message from './Message.jsx';

class MessageList extends Component {
  render() {
    return(
      <main className="messages">
        {this.props.Messages.map((result) => {
          return(
            <Message uniqueMsg={result} key={result.id}/>
          )
        })}
      </main>
    );
  }
}
export default MessageList;