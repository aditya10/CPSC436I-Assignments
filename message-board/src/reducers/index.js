import {combineReducers} from 'redux';

const initMessageList = [
    {id: 1, text: "hello1", isWarning: false},
    {id: 2, text: "hello2", isWarning: true},
    {id: 3, text: "hello3", isWarning: false}
]

const messageReducer = (messageList = initMessageList, action) => {
    if (action.type === 'SUBMIT_MESSAGE') {
        let newMessage = {id: getNewId(messageList), text: action.payload, isWarning: false} 
        return [...messageList, newMessage];
    } else if (action.type === 'SUBMIT_WARNING') {
        let newMessage = {id: getNewId(messageList), text: action.payload, isWarning: true} 
        return [...messageList, newMessage];
    } else if (action.type === 'CLEAR_BOARD') {
        return [];
    } else if (action.type === 'DELETE_MESSAGE') {
        return getListMinus(action.messageid, messageList);
    }
    return messageList;
}

const getListMinus = (id, messageList) => {
    let localList = [];
    var m;
    for(m of messageList) {
        if (m.id !== id) {
            localList.push(m);
        }
    }
    return localList;
}

const getNewId = (messageList) => {
    let currMax = 0;
    var m;
    for(m of messageList) {
        if (m.id > currMax) {
            currMax = m.id
        }
    }
    return currMax+1;
}

export default combineReducers({
    messages: messageReducer
});