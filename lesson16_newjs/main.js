(function () {
    console.warn(`Задача 1`);
    const num = +prompt(`Задача 1. Введите число для проверки на чётность`, 0)
    if (num % 2 == 0) {
        console.log(`Число чётное`)
    } else {
        console.log(`Число нифига не чётное`)
    }

    console.warn(`Задача 2`)
    const age = +prompt(`Задача 2. Введите ваш возраст`, 0)
    let discount = 0
    // if (age < 18) {
    //     discount = 10
    // } else if (age >= 18 && age <= 65) {
    //     discount = 20
    // } else if (age > 65) {
    //     discount = 30
    // }
    switch (true) { //говнокод
        case age < 18:
            discount = 10
            break
        case (age >= 18 && age <= 65):
            discount = 20
            break
        case (age > 65):
            discount = 30
            break
    }
    console.log(`Ваша скидка: ${discount}`)

    console.warn(`Задача 3`)
    const username = prompt(`Задача 3. Введите ваш логин`, `undefined`)
    const password = prompt(`Задача 3. Введите ваш пароль`, `password`)
    if ((username == `user` || username == `admin`) && password == `123456`) {
        console.log(`Доступ разрешён`)
    } else {
        console.log(`Доступ запрещён`)
    }

    console.warn(`Задача 4`)

    const weight = +prompt(`Задача 4. Введите вес вашей посылки в кг`, 0)
    if (weight == undefined || weight <= 0) {
        alert(`Некорректный вес посылки`)
        return
    }
    const classMail = prompt(`Задача 4. Введите тип доставки: Стандарт, Экспресс или Премиум`, `undefined`)
    if (!(classMail == `Стандарт` || classMail == `Экспресс` || classMail == `Премиум`)) {
        alert(`Неверный тип доставки`)
        return
    }
    if (weight < 1) {
        basePrice = 5
    } else if (weight >= 1 && weight <= 5) {
        basePrice = 10
    } else {
        basePrice = 15
    }
    switch (classMail) {
        case `Стандарт`:
            coefPrice = 1
        case `Экспресс`:
            coefPrice = 1.5
        case `Премиум`:
            coefPrice = 2
    }   
    totalPrice = basePrice * coefPrice
    alert(`Итоговая стоимость доставки: ${totalPrice}$`)
})()