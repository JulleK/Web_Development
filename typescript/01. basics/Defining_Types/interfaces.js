var user = {
  name: "jane",
  age: 18,
};
console.log(user);
var UserAccount = /** @class */ (function () {
  function UserAccount(name, age) {
    this.name = name;
    this.age = age;
  }
  return UserAccount;
})();
var firstUser = new UserAccount("johny", 15);
console.log(firstUser);
