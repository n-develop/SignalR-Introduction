"use strict";

function login() {
    var chatUi = document.getElementById("chat-ui");
    var loginArea = document.getElementById("login-screen");
    chatUi.classList.remove("is-hidden");
    loginArea.classList.add("is-hidden");
}

function scrollToBottom() 
{
    var chatlog = document.getElementById("chatlog");
    var scrollHeight = chatlog.scrollHeight;
    chatlog.scrollTop = scrollHeight;
}

const messageInputField = document.getElementById("message");
messageInputField.addEventListener("keyup", function onEvent(e) {
    if (e.keyCode === 13) {
        sendMessage();
    }
});

function sendMessage() {
    var messageInput = document.getElementById("message");
    var text = messageInput.value;

    if (!text || !text.trim()) {
        return;
    }

    showMyMessage(text);
    // TODO send this stuff to the server!
    scrollToBottom();
    messageInput.value = "";
}

function receiveMessage(text, user) {
    showOtherMessage(text, user);
    scrollToBottom();
}

function showMyMessage(text) {
    var chatlog = document.getElementById("chatlog");

    const columns = document.createElement("div");
    columns.classList.add("columns");
    
    addSpacingDiv(columns);

    const messageDiv = document.createElement("div");
    messageDiv.classList.add("column", "is-8");

    const paragraph = document.createElement("p");
    paragraph.classList.add("notification", "is-success");
    paragraph.textContent = text;
    messageDiv.appendChild(paragraph);
    columns.appendChild(messageDiv);
    
    chatlog.appendChild(columns);
}

function showOtherMessage(text, user) {
    var chatlog = document.getElementById("chatlog");

    const columns = document.createElement("div");
    columns.classList.add("columns");
    
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("column", "is-8");

    const paragraph = document.createElement("p");
    paragraph.classList.add("notification", "is-info");
    const userSpan = document.createElement("strong");
    userSpan.textContent = user;
    paragraph.appendChild(userSpan);
    const textSpan = document.createElement("span");
    textSpan.textContent = text;
    paragraph.appendChild(document.createElement("br"));
    paragraph.appendChild(textSpan);
    messageDiv.appendChild(paragraph);
    columns.appendChild(messageDiv);

    addSpacingDiv(columns);

    chatlog.appendChild(columns);
}

function addSpacingDiv(columns) {
    const emptyDiv = document.createElement("div");
    emptyDiv.classList.add("column", "is-4", "is-hidden-mobile");
    columns.appendChild(emptyDiv);
}