"use strict";

function RegisterUser() {
    const usernameInput = document.getElementById("username");
    const username = usernameInput.value;
    if (!username || !username.trim()) {
        console.error("Empty username is not valid");
        return;
    }
    // TODO register the user at the server
    login();
}

function sendTextToServer(text) {
    // TODO send text to the server
}

// --- UI Handling --- //

const messageInputField = document.getElementById("message");
messageInputField.addEventListener("keyup", function onEvent(e) {
    if (e.keyCode === 13) {
        sendMessage();
    }
});

function sendMessage() {
    const messageInput = document.getElementById("message");
    const text = messageInput.value;

    if (!text || !text.trim()) {
        return;
    }

    showMyMessage(text);
    sendTextToServer(text);
    scrollToBottom();
    messageInput.value = "";
}

function login() {
    const chatUi = document.getElementById("chat-ui");
    const loginArea = document.getElementById("login-screen");
    chatUi.classList.remove("is-hidden");
    loginArea.classList.add("is-hidden");
}

function scrollToBottom()
{
    const chatlog = document.getElementById("chatlog");
    chatlog.scrollTop = chatlog.scrollHeight;
}

function showMyMessage(text) {
    const chatlog = document.getElementById("chatlog");

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
    const chatlog = document.getElementById("chatlog");

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