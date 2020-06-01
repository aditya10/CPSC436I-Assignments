import React from 'react';
import { connect } from 'react-redux';
import { submit, submitWarning } from '../actions';

class AddMessage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {inputValue: ''};
    }

    handleChange = (e) => {
        this.setState({inputValue: e.target.value});
    }

    clearBox = () => {
        this.setState({inputValue: ""});
    }

    render() {
        return (<div className="message_area">
        <div className="message_box">
            <span className="message_tag">Enter your message</span>
            <input id="message_tb" type="text" value={this.state.inputValue} onChange={this.handleChange}/>
            <button id="submit" onClick={() => this.props.submit(this.state.inputValue)}>Submit</button>
            <button id="submit_warning" onClick={() => this.props.submitWarning(this.state.inputValue)}>Warn</button>
            <button id="clear" onClick={this.clearBox}>Clear</button>
        </div>
    </div>);
    }
}

export default connect(null, { submit, submitWarning })(AddMessage);