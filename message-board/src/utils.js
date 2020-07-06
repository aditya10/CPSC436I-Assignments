export function getListMinus(id, messageList) {
    let localList = [];
    var m;
    for(m of messageList) {
        if (m._id !== id) {
            localList.push(m);
        }
    }
    return localList;
}

export function getDate() {
    let now = new Date();
    let dd = String(now.getDate()).padStart(2, '0');
    let mm = String(now.getMonth() + 1).padStart(2, '0');
    let yyyy = now.getFullYear();
    return (mm + '-' + dd + '-' + yyyy);
}

export function getNewId(messageList) {
    let currMax = 0;
    var m;
    for(m of messageList) {
        if (m.id > currMax) {
            currMax = m.id
        }
    }
    return currMax+1;
}