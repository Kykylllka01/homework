console.warn(`Задача 1`)

const person = {
    firstName: `Ivan`,
    lastName: `Malanych`,
    age: 18
}

for (const key in person) {
    console.log(person[key])
}

console.warn(`Задача 2`)

function isEmpty(object) {
    if (object == {}) {
        console.log(true)
    } else {
        console.log(false)
    }
}

const emptyObject = {}
isEmpty(emptyObject)

console.warn(`Задача 3`)

const task = {
    title: `Название`,
    description: `Описание`,
    isCompleted: true
}

function cloneAndModify(object, modifications) {
    return { ...object, ...modifications }
}

const newObject = cloneAndModify(task, person)

for (const key in newObject) {
    console.log(newObject[key])
}

console.warn(`Задача 4`)

const myObject = {
    method1() {
        console.log(`Метод1 вызван`)
    },
    method2() {
        console.log(`Метод2 вызван`)
    },
    method3() {
        console.log(`Метод3 вызван`)
    },
    property: `Это не метод`
}

function callAllMethods(object) {
    for (const key in object) {
        if (typeof (object[key]) == `function`) {
            object[key]()
        }
    }
}
callAllMethods(myObject)