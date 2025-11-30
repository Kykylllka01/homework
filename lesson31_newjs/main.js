console.warn(`Задача 1`)
function calculateFinalPrice(base, disc, tax) {
    return base * (1 - disc/100) + base * (1 - disc/100) * tax
}
console.log(calculateFinalPrice(100, 10, 0.2))
console.log(calculateFinalPrice(100, 10, 0))

console.warn(`Задача 2`)
function checkAccess(user, pass) {
    if (user == `admin` && pass == `123456`) {
        return `Доступ разрешён`
    } else {
        return `Доступ запрещён`
    }
}
console.log(checkAccess(`admin`,`123456`))

console.warn(`Задача 3`)
function getTimeOfDay(hour) {
    if (hour >= 0 && hour <= 5) {
        return `Ночь`
    } else if (hour >= 6 && hour <= 11) {
        return `Утро`
    } else if (hour >= 12 && hour <= 17) {
        return `День`
    } else if (hour >= 18 && hour <= 23) {
        return `Вечер`
    } else {
        return `Некорректное время`
    }
}
console.log(getTimeOfDay(12))

console.warn(`Задача 4`)
function findFirstEven(start, end) {
    for (let i = start; i <= end; i++) {
        if (i % 2 == 0) {
            return i
        }
    }
    return `Чётных чисел нет`
}
console.log(findFirstEven(-9, 1))