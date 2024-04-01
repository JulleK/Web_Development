// file 01
// basic interface for an object
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "jane",
  age: 18,
};

console.log(user);

// interface for a class
interface User {
  name: string;
  age: number;
}

class UserAccount {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const firstUser: User = new UserAccount("johny", 15);
console.log(firstUser);
