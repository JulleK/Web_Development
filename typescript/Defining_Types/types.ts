// file 02
type MyBool = true | false;
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

const num: PositiveOddNumbersUnderTen = 5;
console.log(num);
console.log(typeof num);

// --------------------

function getLength(obj: string | string[]) {
  return obj.length;
}

console.log(getLength("Hello"));
console.log(getLength(["hi", "hello"]));

// --------------------

function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string") return [obj];
  else return obj;
}
