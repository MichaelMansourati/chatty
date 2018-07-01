import React, {Component} from 'react';

import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
import Navbar from './Navbar.jsx';


class App extends Component {

  constructor() {
    super();
    this.state = {
      currentUser: {name: "Anonymous"},
      notifications: [],
      messages: [],
      activeUsersNum: 0
    }
    this.handleEnterUsername = this.handleEnterUsername.bind(this);
    this.handleEnterNewMsg = this.handleEnterNewMsg.bind(this);
  }


  handleEnterUsername(event) {
    if (event.charCode == 13) {
      this.ws.send(JSON.stringify(
        {
          "type": "postNotification",
          "statement": `${this.state.currentUser.name} changed their name to ${event.target.value}`
        })
      );
      this.setState({currentUser: {name: event.target.value}});
    }
  }

  handleEnterNewMsg(event) {
    if (event.charCode == 13) {
      this.ws.send(JSON.stringify({type: "postMessage", username: this.state.currentUser.name, content: event.target.value}));
    }
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    this.ws = new WebSocket("ws://localhost:2001");
    this.ws.onopen = (event) => {
      console.log('WS Opened');
    }
    this.ws.onmessage = (event) => {
      const msgObj = JSON.parse(event.data);
      if (msgObj.type == "incomingMessage") {
        this.state.messages.push(msgObj);
        this.setState({messages: this.state.messages});
      } else if (msgObj.type == "incomingNotification") {
        this.state.messages.push(msgObj);
        this.setState({messages: this.state.messages});
      } else if (msgObj.type == "activeSockets") {
        this.setState({activeUsersNum: msgObj.number})
      } else {
        console.log("error: unknown event type: ", msgObj);
      }
    }
  }

  render() {
    return (
      <div>
        <Navbar activeUsersNumProp={this.state.activeUsersNum} />
        <MessageList Messages={this.state.messages} />
        <ChatBar currentUser={this.state.currentUser.name} onEnterUsername={this.handleEnterUsername} onEnterNewMsg={this.handleEnterNewMsg} />
      </div>
    );
  }

}

export default App;