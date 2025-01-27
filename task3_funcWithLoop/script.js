try {
  for (let i = 0; i < 10; i++) {
    let input = check(prompt('Введи число > 100'))
    console.log(Number(input))
    if (Number(input) > 100 || isNaN(input)) {
      console.log(`Ти ввів ${input}`)
      break
    } else {
      console.log(`Ти ввів ${input}, а потрібно було число > 100. Введи ще раз`)
    }
  }
} catch (error) {
  console.error(`Помилка, ${error}`)
} finally {
  console.log('Перевірено')
}
//перевірка
function check(y) {
  if (y === undefined || y === null) throw new TypeError('Невірний тип даних.') //перевірка на undefined, null
  if (typeof y === 'string' && y.trim() === '') {
    throw new TypeError('Пуста строка.') //перевірка на пусту строку
  }

  return y
}
