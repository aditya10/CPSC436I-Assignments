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