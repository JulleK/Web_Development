function greet(person) {
    console.log(`Hi, ${person}!`);
}

// greet("Joe");


function repeat(msg, numTimes) {
    let result = "";
    for (let i = 1; i <= numTimes; i++) {
        result += msg + " ";
    }
    console.log(result);
}

// repeat("JO MaMa", 5);


function add(x, y) {
    return x + y;
}

const sum = add(15, 13);
