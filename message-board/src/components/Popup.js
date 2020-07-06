import React from 'react';
import { connect } from 'react-redux';
import { deleteMessage } from '../actions';

class Popup extends React.Component {

    deleteAndClose = () => {
        this.props.deleteMessage(this.props.message._id);
        this.props.close();
    }

    render() {
        return (
            <div className="overlay">
                <div className="popup">
                    <span className="text">{this.props.message.text}</span>
                    <button id="delete_message" onClick={this.deleteAndClose}>Delete</button>
                    <button id="close_button" onClick={this.props.close}>x</button>
                </div>
            </div>
        )
    }

}

export default connect(null, { deleteMessage })(Popup);