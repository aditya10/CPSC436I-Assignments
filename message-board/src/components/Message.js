import React from 'react';

class Message extends React.Component {

    render() {
        return (
            <div className={`message ${this.props.message.isWarning? "warning" : ""}`} 
                onClick={() => this.props.openMessage(this.props.message._id)}>
                <span className="message-text">{this.props.message.text}</span>
                <span className="message-date">{this.props.message.date}</span>
            </div>
        )
    }

}

export default Message;