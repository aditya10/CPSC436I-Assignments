
// this is stringified JSON that will be displayed on page load, if the message board is empty
predefinedText = '{"texts":[{"message": "Hello there!","isWarning": false},{"message": "Check the electrical systems!","isWarning": true},{"message": "CSS is pure magic","isWarning": false}]}';

//
// UTILITY FUNCTIONS
//

// Add a message to the board
function add(message, isWarning) {
    let board = document.getElementById("message_board")
    if (message !== undefined && message !== "") {
        var newDiv = document.createElement('div');
        newDiv.className = 'message';
        if(isWarning) {
            newDiv.id = 'warning';
        }
        newDiv.append(message);
        board.prepend(newDiv);
        clearBox();
    }
}

// save message to localStorage
function saveToLocalStorage(message, isWarning) {
    let newText = {
        "message": message,
        "isWarning": isWarning
    };
    let storedTexts = localStorage['storedTexts'];
    if (storedTexts === undefined || storedTexts === null) {
        let texts = {
            "texts": [newText]
        };
        localStorage['storedTexts'] = JSON.stringify(texts);
    } else {
        let texts = JSON.parse(storedTexts);
        texts["texts"].push(newText);
        localStorage['storedTexts'] = JSON.stringify(texts);
    }
}

// clear local storage. This happens when the board is cleared
function clearLocalStorage() {
    localStorage.clear();
}

// render the board usind the predefined texts
function renderBoard() {
    let texts = JSON.parse(predefinedText)["texts"];
    texts.forEach(text => {
        add(text['message'], text['isWarning']);
        saveToLocalStorage(text['message'], text['isWarning']);
    });
}

// render board with messages from localStorage
function renderTexts(storedTexts) {
    storedTexts.forEach(text => {
        add(text['message'], text['isWarning']);
    });
}

//
// BUTTONS
//

// clear the message text box
function clearBox() {
    textbox = document.getElementById("message_tb");
    textbox.value = "";
}

// clear the board
function clearBoard() {
    let messages = document.querySelectorAll('.message');
    let board = document.getElementById("message_board");
    messages.forEach(div => {
        board.removeChild(div);
    });
    clearLocalStorage();
}

// submit a normal message
function submit() {
    let message = document.getElementById("message_tb").value;
    add(message, false);
    saveToLocalStorage(message, false);
}

// submit a warning message
function submitWarning() {
    let message = document.getElementById("message_tb").value;
    add(message, true);
    saveToLocalStorage(message, true);
}

//
// ON LOAD
//

window.onload = function() {
    let storedTexts = localStorage['storedTexts'];
    if (storedTexts === undefined || storedTexts === null) {
        renderBoard();
    } else {
        renderTexts(JSON.parse(storedTexts)["texts"]);
    }
};
