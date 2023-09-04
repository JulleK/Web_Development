function moveZeros(arr) {
  let zerosCount = 0;

  // count all zeros
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0)
      zerosCount++
  }

  // remove all zeros
  const newArr = arr.filter(i => i !== 0)

  // add zeros to the end
  for (let i = 1; i <= zerosCount; i++) {
    newArr.push(0)
  }

  return newArr
}
console.log(
  moveZeros([
    9, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 2, 0, 0, 0, 2
  ])
)