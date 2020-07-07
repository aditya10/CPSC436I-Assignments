import React from 'react';
import { connect } from 'react-redux';
import { updateMessage, deleteMessage } from '../actions';

class Popup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {inputValue: ''};
    }

    deleteAndClose = () => {
        this.props.deleteMessage(this.props.message._id);
        this.props.close();
    }

    updateAndClose = () => {
        this.props.updateMessage(this.props.message._id, this.state.inputValue);
        this.props.close();
    }

    handleChange = (e) => {
        this.setState({inputValue: e.target.value});
    }

    componentDidMount = () => {
        this.setState({inputValue: this.props.message.text})
    }

    render() {
        return (
            <div className="overlay">
                <div className="popup">
                    <input className="text" type="text" value={this.state.inputValue} onChange={this.handleChange}/>
                    <button id="delete_message" onClick={this.deleteAndClose}>Delete</button>
                    <button id="delete_message" onClick={this.updateAndClose}>Update</button>
                    <button id="close_button" onClick={this.props.close}>x</button>
                </div>
            </div>
        )
    }

}

export default connect(null, { updateMessage, deleteMessage })(Popup);