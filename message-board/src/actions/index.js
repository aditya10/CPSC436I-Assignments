import {getDate} from '../utils';

export function loadMessages() {
    return (dispatch) => {
        return fetch('http://localhost:3001/messages', {
            method: 'GET'
        })
        .then(res => res.text())
        .then(res => {
            const messages = JSON.parse(res);
            if (messages) {
                dispatch(addAllMessages(messages));
            }
        })
        .catch(err => console.log(err));
    }
}

export function addMessage(text, warningBool) {
    let newMessage = {text: text, isWarning: warningBool, date: getDate()}
    return (dispatch) => {
        return fetch('http://localhost:3001/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newMessage)
        })
        .then(res => res.text())
        .then(res => {
            const message = JSON.parse(res);
            if (message) {
                dispatch(submit(message));
            }
        })
        .catch(err => console.log(err));
    }
}

export const addAllMessages = (messages) => {
    return {
        type: 'ADD_ALL_MESSAGES',
        payload: messages
    };
}

export const submit = (message) => {
    return {
        type: 'SUBMIT_MESSAGE',
        payload: message
    };
};

export const clearBoard = () => {
    return {
        type: 'CLEAR_BOARD'
    };
};

export const deleteMessage = (id) => {
    return {
        type: 'DELETE_MESSAGE',
        messageid: id
    };
};