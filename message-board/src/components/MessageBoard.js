import React from 'react';
import { connect } from 'react-redux';
import { deleteAllMessages, loadMessages } from '../actions';
import MessageList from './MessageList';
import Popup from './Popup';
import spin from '../spinner.gif';

class MessageBoard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: null
        };
    }

    openMessage = (id) => {
        let m = this.getMessageFromId(this.props.messages, id);
        this.setState({message: m});
    }

    closeMessage = () => {
        this.setState({message: null});
    }

    componentDidMount = () => {
        // Get Data from API and load it into Redux
        this.props.loadMessages()
    }

    render() {
        let popup = null;
        if (this.state.message !== null) {
            popup = <Popup message={this.state.message} close={this.closeMessage}/>;
        }
        let spinner = null;
        if (this.props.spinner === true) {
            spinner = <img className="spinner" alt="spinner" src={spin}/>
        }

        return (<div className="main_area">
        <div className="boardhead">
            <span className="boardheader_text">Messages</span>
            <button id="clearBoard" onClick={() => this.props.deleteAllMessages()}>Clear Board</button>
        </div>
        <MessageList messages={this.props.messages} openMessage={this.openMessage}/>
        {popup}
        {spinner}
    </div>);
    }

    getMessageFromId = (messageList, id) => {
        var m;
        for (m of messageList) {
            if (m._id === id) {
                return m;
            } 
        }
        return null;
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages,
        spinner: state.spinner};
}

export default connect(mapStateToProps, { deleteAllMessages, loadMessages })(MessageBoard);