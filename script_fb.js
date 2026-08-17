var database = [
    {
        username: "Tanu",
        password: "Secret"
    },
    {
        username: "Pavan",
        password: "1234"
    },
    {
        username: "Lucky",
        password: "12345"
    }
];

var newsFeed = [
    {
        username: "Andyy",
        timeline: "Teaching javascript"
    },
    {
        username: "Bob",
        timeline: "learning javascript is cool"
    }
];

var userNamePrompt = prompt("What's your username ?");
var passWordPrompt = prompt("What's your password ?");

function isUserValid(user, pass) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === user && database[i].password === pass) {
            return true;
        }
    }
    return false;
}

function signIn(user, pass) {
    if (isUserValid(user, pass)) {
        console.log(newsFeed);
    }
    else {
        alert("Sorry, invalid username!");
    }
}

signIn(userNamePrompt, passWordPrompt);
