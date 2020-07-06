export function loadMessages() {
    return (dispatch) => {
        return fetch('http://localhost:3001/messages')
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

export const addAllMessages = (messages) => {
    return {
        type: 'ADD_ALL_MESSAGES',
        payload: messages
    };
}

export const submit = (text) => {
    return {
        type: 'SUBMIT_MESSAGE',
        payload: text
    };
};
  
export const submitWarning = (text) => {
    return {
        type: 'SUBMIT_WARNING',
        payload: text
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