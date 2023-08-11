/*
write a function modifyArray that takes an array of numbers 
 as the first argument, and a modifier (function how to modify nums) 
 as the second argument. 

 example:
 modifyArray([1,2,3], x => x * x)
    returns: [1, 4, 9]

 we passed in an array of nums and a function that squares every num
 we got a new array of squared nums we passed in
*/

function modifyArray(nums, modifier) {
    const modifiedArray = []
    for (let num of nums) {
        modifiedArray.push(modifier(num))
    }
    return modifiedArray;
}

const nums = [1, 4, 5, 8, 10];
console.log(modifyArray(nums, x => x * x))
// console.log(modifyArray(nums, x => x + 5 - x / 2))


function modifyArray2(nums, modifier) {
    const modifiedArray = nums.map(modifier)
    return modifiedArray
}

console.log(modifyArray2(nums, x => x * x))