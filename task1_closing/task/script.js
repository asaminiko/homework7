let initialValue = 0

let num = [2, 2, 6, 5]
console.log(`Складання чисел ${num} з ${initialValue}`)
let sum = add(initialValue)
for (i of num) {
  console.log(sum(i))
}

//замикання
function add(x) {
  return function (y) {
    return (x += y)
  }
}
