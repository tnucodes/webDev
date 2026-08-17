var button = document.getElementById("enter");
var input = document.getElementById("user input");
var ul = document.querySelector("ul");

function inputLen() {
    return input.value.length;
}

function createListEle() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function AddAfterClick() {
    if (inputLen() > 0) {
        createListEle();
    }
}

function AddafterKeypress(event) {
    if (inputLen() > 0 && event.keyCode === 13) {
        createListEle();
    }
}

button.addEventListener("click", AddAfterClick);

input.addEventListener("keypress", AddafterKeypress);


