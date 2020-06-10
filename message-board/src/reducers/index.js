import {combineReducers} from 'redux';

const initMessageList = [
    {id: 1, text: "hello1", isWarning: false, date: "06-09-2020"},
    {id: 2, text: "hello2", isWarning: true, date: "06-09-2020"},
    {id: 3, text: "hello3", isWarning: false, date: "06-09-2020"}
]

const messageReducer = (messageList = initMessageList, action) => {
    if (action.type === 'SUBMIT_MESSAGE') {
        let newMessage = {id: getNewId(messageList), text: action.payload, isWarning: false, date: getDate()} 
        return [...messageList, newMessage];
    } else if (action.type === 'SUBMIT_WARNING') {
        let newMessage = {id: getNewId(messageList), text: action.payload, isWarning: true, date: getDate()} 
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

const getDate = () => {
    let now = new Date();
    let dd = String(now.getDate()).padStart(2, '0');
    let mm = String(now.getMonth() + 1).padStart(2, '0');
    let yyyy = now.getFullYear();
    return (mm + '-' + dd + '-' + yyyy);
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