console.warn(`Задача 1`)
for (let i = 1; i <= 20; i++) {
    if (i % 4 == 0) {
        continue
    }
    console.log(i)
}

console.warn(`Задача 2`)
const number = +prompt(`Введите число`, 1)
let result = 1
if (!isNaN(number) && number >= 1) {
    for (let i = 1; i <= number; i++) {
        result *= i
    }
    alert(`Факториал равен: ${result}`)
} else {
    alert(`Ошибка, неправильное число`)
}

console.warn(`Задача 3`)
let board = ``
for (let i = 0; i < 8; i++) {
    flag = i % 2 == 0 ? true : false
    for (let j = 0; j < 8; j++) {
        board += flag ? j % 2 == 0 ? `Ч` : `Б` : j % 2 == 0 ? `Б` : `Ч`
    }
    board += `\n`
}
console.log(board)