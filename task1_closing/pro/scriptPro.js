try {
  let inputInitialValue = check(prompt('Введи початкове число').trim())

  //перевірка початкове число це одне число?
  if (inputInitialValue.includes(' '))
    throw new TypeError('Значення не одне число.')

  //перевірка для дробових чисел
  inputInitialValue = parseFloat(inputInitialValue.replace(',', '.'))
  if (isNaN(inputInitialValue)) throw new TypeError('Значення не є числом.')

  let numbersInput = check(
    prompt('Що б ти хотів скласти? Введи через пробіл').trim()
  )
  numArray = numbersInput.split(/\s+/)
  console.log(`Складання чисел ${numArray} з ${inputInitialValue}`)

  //перевірка для дробових чисел
  numbers = numArray.map((i) => {
    let float = parseFloat(i.replace(',', '.'))
    if (isNaN(float)) throw new TypeError('Значення не є числом.')
    return float
  })

  let sum = add(inputInitialValue)
  for (i of numbers) {
    console.log(sum(i))
  }
} catch (error) {
  console.error(`Помилка, ${error}`)
} finally {
  console.log('Перевірено')
}

//замикання
function add(x) {
  return function (y) {
    return (x += y)
  }
}

//перевірка
function check(y) {
  if (y === undefined || y === null) throw new TypeError('Невірний тип даних.') //перевірка на undefined, null
  if (typeof y === 'string' && y.trim() === '') {
    throw new TypeError('Пуста строка.') //перевірка на пусту строку
  }

  return y
}
