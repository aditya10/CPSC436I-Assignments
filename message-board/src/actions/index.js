import {getDate} from '../utils';

export function loadMessages() {
    return (dispatch) => {
        dispatch(startSpinner());
        return fetch('http://localhost:3001/messages', {
            method: 'GET'
        })
        .then(res => res.text())
        .then(res => {
            const messages = JSON.parse(res);
            if (messages) {
                dispatch(addAllMessages(messages));
                dispatch(endSpinner());
            }
        })
        .catch(err => {
            console.log(err);
            dispatch(endSpinner());
        });
    }
}

export function addMessage(text, warningBool) {
    let newMessage = {text: text, isWarning: warningBool, date: getDate()}
    return (dispatch) => {
        dispatch(startSpinner());
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
                dispatch(endSpinner());
            }
        })
        .catch(err => {
            console.log(err);
            dispatch(endSpinner());
        });
    }
}

export function updateMessage(id, text) {
    let updatedMessage = {text: text}
    return (dispatch) => {
        dispatch(startSpinner());
        return fetch('http://localhost:3001/messages/'+id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedMessage)
        })
        .then(res => res.text())
        .then(res => {
            const message = JSON.parse(res);
            if (message) {
                dispatch(updateItem(id, text));
                dispatch(endSpinner());
            }
        })
        .catch(err => {
            console.log(err);
            dispatch(endSpinner());
        });
    }
}

export function deleteMessage(id) {
    return (dispatch) => {
        dispatch(startSpinner());
        return fetch('http://localhost:3001/messages/'+id, {
            method: 'DELETE'
        })
        .then(res => res.status)
        .then(status => {
            if (status === 204) {
                dispatch(deleteItem(id));
                dispatch(endSpinner());
            }
        })
        .catch(err => {
            console.log(err);
            dispatch(endSpinner());
        });
    }
}

export function deleteAllMessages() {
    return (dispatch) => {
        dispatch(startSpinner());
        return fetch('http://localhost:3001/messages/', {
            method: 'DELETE'
        })
        .then(res => res.status)
        .then(status => {
            if (status === 204) {
                dispatch(clearBoard());
                dispatch(endSpinner());
            }
        })
        .catch(err => {
            console.log(err);
            dispatch(endSpinner());
        });
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

export const deleteItem = (id) => {
    return {
        type: 'DELETE_MESSAGE',
        messageid: id
    };
};

export const updateItem = (id, text) => {
    return {
        type: 'UPDATE_MESSAGE',
        messageid: id,
        payload: text
    }
}

export const startSpinner = () => {
    return {
        type: 'START'
    }
}

export const endSpinner = () => {
    return {
        type: 'END'
    }
}