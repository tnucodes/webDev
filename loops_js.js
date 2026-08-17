var todolist = [
    "Clean room",
    "Fresh up",
    "Excercise",
    "Study javascript",
    "Eat healthy"
];

var todolistImp = [
    "Clean room!!",
    "Fresh up!!",
    "Excercise!!",
    "Study javascript!!",
    "Eat healthy!!"
];

// var len = todolist.length;
// for (var i = 0; i < len; i++) {
//     console.log(todolist[i]);
// }

function logTodo(i){
    console.log(i);
}

todolist.forEach(logTodo);
todolistImp.forEach(logTodo);

// var cnt = 10;
// while(cnt > 10)
// {
//     console.log("while",cnt);
//     cnt--;
// }
// var cnt1 = 10;
// do{
//     console.log("do-while",cnt1);
//     cnt1--;
// }while(cnt1 > 10);