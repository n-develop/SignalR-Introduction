/// <reference path="chatroom.js" />

"use strict";

function RegisterUser() {
    var usernameInput = document.getElementById("username");
    var username = usernameInput.value;
    if (!username || !username.trim()) {
        console.error("Empty username is not valid");
        return;
    }
    // TODO register the user at the server
    login();
}