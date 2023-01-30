const todoList = ['sadasdas', 'hi'];

function toDos() {
    let command = prompt("What do you want to do?");
    let newTodo;
    let deleteIndex;

    if (command === "list") {
        console.log("\n*-*-*-*-*-*-*-*");
        for (toDo of todoList) {
            console.log(`${todoList.indexOf(toDo)}: ${toDo}`);
        }
        console.log("---------------");
    }
    else if (command === "new") {
        newTodo = prompt("Type what you want to add");
        todoList.push(newTodo);
    }
    else if (command === "delete") {
        deleteIndex = prompt("What index do you want to delete?");
        todoList.splice(deleteIndex, 1);
        console.log("deleted entry at index " + deleteIndex);
    }

    if (command !== "quit") {
        setTimeout(toDos, 0);
    }
    else {
        console.log("OK QUITTING!");
    }
}

setTimeout(toDos, 0);