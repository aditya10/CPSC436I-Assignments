import React from 'react';
import Message from './Message';

class MessageList extends React.Component {

    render() {
        return (<div className="board" id="message_board">
                {this.props.messages.map(m => 
                    {return(<Message key={m._id} message={m} openMessage={this.props.openMessage} />)})}
                </div>)
    }

}

export default MessageList;