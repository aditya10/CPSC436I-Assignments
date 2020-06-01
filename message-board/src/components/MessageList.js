import React from 'react';

class MessageList extends React.Component {

    render() {
        return (<ul className="board" id="message_board">
            {this.props.messages.map(m => {
                return(<li 
                className={"message" + `${m.isWarning? " warning" : ""}`} 
                key={m.id}
                onClick={() => this.props.openMessage(m.id)}>
                {m.text}</li>)
                })
            }
        </ul>)
    }

}

export default MessageList;