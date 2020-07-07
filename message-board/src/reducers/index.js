import {combineReducers} from 'redux';
import {getListMinus, updateList} from '../utils';

const messageReducer = (messageList = [], action) => {
    if (action.type === 'ADD_ALL_MESSAGES') {
        let newMessageList = action.payload;
        return newMessageList;
    } else if (action.type === 'SUBMIT_MESSAGE') {
        let newMessage = action.payload;
        return [...messageList, newMessage];
    } else if (action.type === 'CLEAR_BOARD') {
        return [];
    } else if (action.type === 'DELETE_MESSAGE') {
        return getListMinus(action.messageid, messageList);
    } else if (action.type === 'UPDATE_MESSAGE') {
        return updateList(messageList, action.messageid, action.payload)
    }
    return messageList;
}

const spinnerReducer = (initial = false, action) => {
    if (action.type === 'START') {
        return true;
    } else if (action.type === 'END') {
        return false;
    }
    return initial;
}

export default combineReducers({
    messages: messageReducer,
    spinner: spinnerReducer
});