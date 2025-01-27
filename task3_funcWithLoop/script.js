try {
  isMoreHundred()
} catch (error) {
  console.error(`Помилка, ${error}`)
} finally {
  console.log('Перевірено')
}
function isMoreHundred() {
  for (let i = 0; i < 10; i++) {
    let input = check(prompt('Введи число > 100'))

    if (Number(input) > 100 || isNaN(input)) {
      return console.log(`Ти ввів ${input}`)
    }
    console.log(`Ти ввів ${input}, а потрібно було число > 100.`)
    continue
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
