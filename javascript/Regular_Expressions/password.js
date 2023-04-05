let input = "Zaq1@WSX"
const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/g

console.log(input.search(regex))