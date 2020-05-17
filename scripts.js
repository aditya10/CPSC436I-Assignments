
predefinedText = '{"texts": ["hello there!", "this is the second"]}';

function renderBoard() {
    let board = document.getElementById("message_board");
    let texts = JSON.parse(predefinedText)["texts"];
    texts.forEach(text => {
        var newDiv = document.createElement('div');
        newDiv.className = 'message';
        newDiv.append(text);
        board.appendChild(newDiv);
    });
}

function clearBox() {
    textbox = document.getElementById("message_tb");
    textbox.value = "";
}

function clearBoard() {
    let messages = document.querySelectorAll('.message');
    let board = document.getElementById("message_board");
    messages.forEach(div => {
        board.removeChild(div);
    });
}

function submit() {
    let text = document.getElementById("message_tb").value;
    let board = document.getElementById("message_board")
    if (text !== undefined && text !== "") {
        var newDiv = document.createElement('div');
        newDiv.className = 'message';
        newDiv.append(text);
        board.prepend(newDiv);
        clearBox();
    }
}

window.onload = function() {
    renderBoard();
};

