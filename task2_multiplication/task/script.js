console.log(multiply(5)(2))

function multiply(x) {
  return function (y) {
    return x * y
  }
}
