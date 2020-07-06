import {combineReducers} from 'redux';
import {getListMinus} from '../utils';

const initMessageList = [
    {_id: "default", text: "default", isWarning: false, date: "06-30-2020"},
]

const messageReducer = (messageList = initMessageList, action) => {
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
    }
    return messageList;
}

export default combineReducers({
    messages: messageReducer
});