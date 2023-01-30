console.log("TEST");
let command = prompt("What do you want to do?");
// let newTodo;
console.log("TEST2");
const todoList = ['sadasdas', 'hi'];
console.log("djashfsdjaklhflasd")
while (command !== "quit" && command !== 'q') {
    console.log("TEST3333");
    if (command === "new") {
        newTodo = prompt("type what you want to add");
        todoList.push(newTodo);
    }
    if (command === "list") {
        console.log("----------------");
        console.log(todoList);
        console.log("----------------");
    }
    command = prompt("What do you want to do?");
}

console.log("OK QUITTING!");
